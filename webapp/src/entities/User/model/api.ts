import { baseApi } from '@shared/api';
import { setUser } from './slice';
import { IUser } from './types';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    me: build.query<IUser, void>({
      query: () => ({ url: `/auth/me` }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const { useMeQuery } = sessionApi;
