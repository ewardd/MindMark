import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@shared/hooks';

const BASE_URL = process.env.REACT_APP_SERVER_ENDPOINT as string;

export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const { accessToken } = (getState() as RootState).sessionState;

      if (accessToken) {
        headers.set('Authorization', `Bearer ${accessToken}`);
      }

      return headers;
    },
  });
