import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@shared/hooks';

export const REFRESH_TOKEN_PLACEHOLDER = '_REFRESH_TOKEN_';

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    if (headers.get('Authorization') === REFRESH_TOKEN_PLACEHOLDER) {
      const { refreshToken } = (getState() as RootState).sessionState;

      if (refreshToken) headers.set('Authorization', `Bearer ${refreshToken}`);
      else headers.delete('Authorization');
      return headers;
    }

    const { accessToken } = (getState() as RootState).sessionState;

    if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`);

    return headers;
  },
});
