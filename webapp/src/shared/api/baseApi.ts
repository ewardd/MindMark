import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQueryWithReauth } from './baseQueryWithReauth';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Notes', 'Note'],
  endpoints: () => ({}),
});
