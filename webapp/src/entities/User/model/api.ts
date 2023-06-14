import { baseApi, IUser } from '@shared/api';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<IUser, void>({
      query: () => ({ url: `/auth/me` }),
    }),
  }),
});

export const { useMeQuery } = sessionApi;
