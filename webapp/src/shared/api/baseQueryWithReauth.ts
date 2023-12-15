import { FetchBaseQueryError, FetchBaseQueryMeta, fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { notification } from 'antd';
import { Mutex } from 'async-mutex';
import { baseApi, isTokensResult, setAuthTokens } from '@shared/api';
import { logout } from '@shared/hooks';
import { capitalizeFirstLetter } from '@shared/utils';
import { baseQuery, REFRESH_TOKEN_PLACEHOLDER } from './baseQuery';

const mutex = new Mutex();

export const baseQueryWithReauth: ReturnType<typeof fetchBaseQuery> = async (
  args,
  api,
  extraOptions,
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> => {
  // Wait for mutex unlock before doing anything
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (isRevalidateTokenError(result.error)) {
    // Check if mutex is locked
    if (mutex.isLocked()) {
      // Wait for mutex unlock and retry the same query
      await mutex.waitForUnlock();
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Lock mutex to perform token refresh
      const release = await mutex.acquire();

      try {
        // Trying to fetch the `refresh` API endpoint with `refreshToken`
        const refreshTokenResult = await baseQuery(
          {
            url: '/auth/refresh',
            // Let the `baseQuery` handle header management
            headers: { Authorization: REFRESH_TOKEN_PLACEHOLDER },
          },
          api,
          extraOptions,
        );

        // Check if we actually got tokens
        if (isTokensResult(refreshTokenResult?.data)) {
          // If so, set 'em and retry the same query
          api.dispatch(setAuthTokens(refreshTokenResult.data));
          result = await baseQuery(args, api, extraOptions);
        } else {
          // If not, just drop the session
          api.dispatch(logout());
          api.dispatch(baseApi.util.resetApiState());
        }
      } finally {
        // Unlock mutex
        release();
      }
    }
  }

  if (result.error)
    notification.error({
      message: 'An error occurred',
      description: getMessageFromError(result.error),
    });
  return result;
};

const getMessageFromError = (error: FetchBaseQueryError | undefined | null): string | undefined => {
  if (!error) return undefined;

  if (error instanceof Error) return error.message;
  if (error.data instanceof Error) return error.data.message;
  if (error.data && typeof error.data === 'object' && 'message' in error.data && typeof error.data.message === 'string')
    return error.data.message;
  if (error.data && typeof error.data === 'object' && 'message' in error.data && Array.isArray(error.data.message))
    return error.data.message.map((message) => capitalizeFirstLetter(message)).join('\n');
  if (typeof error.data === 'string') return error.data;
};

const isRevalidateTokenError = (error: FetchBaseQueryError | undefined | null): boolean => {
  if (!error) return false;

  if (!error?.status || typeof error.status !== 'number' || error.status !== 401) return false;

  if (error.data && typeof error.data === 'object' && 'error' in error.data && typeof error.data.error === 'string')
    return true;

  return false;
};
