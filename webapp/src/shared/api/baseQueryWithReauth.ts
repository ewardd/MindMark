import { FetchArgs, BaseQueryApi, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/dist/query';
import { QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import { notification } from 'antd';
import { baseApi } from '@shared/api';
import { logout } from '@shared/hooks';
import { baseQuery } from './baseQuery';

export async function baseQueryWithReauth(
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {},
): Promise<QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>> {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error)
    notification.error({
      message: 'An error occurred',
      description: getMessageFromError(result.error),
    });

  if (isRevalidateTokenError(result.error)) {
    // TODO: [MM-62] Add reauth logic
    api.dispatch(logout());
    api.dispatch(baseApi.util.resetApiState());
  }

  return result;
}

const getMessageFromError = (error: FetchBaseQueryError | undefined | null): string | undefined => {
  if (!error) return undefined;

  if (error instanceof Error) return error.message;
  if (error.data instanceof Error) return error.data.message;
  if (error.data && typeof error.data === 'object' && 'message' in error.data && typeof error.data.message === 'string')
    return error.data.message;
  if (typeof error.data === 'string') return error.data;
};

const isRevalidateTokenError = (error: FetchBaseQueryError | undefined | null): boolean => {
  if (!error) return false;

  if (!error?.status || typeof error.status !== 'number' || error.status !== 401) return false;

  if (error.data && typeof error.data === 'object' && 'error' in error.data && typeof error.data.error === 'string')
    return true;

  return false;
};
