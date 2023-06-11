import { baseApi } from '@shared/api';
import { setAccessToken } from './slice';
import { ISession, ISignInDto, ISignUpDto } from './types';

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ISession, ISignInDto>({
      query: (body) => ({
        url: `/auth/login`,
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAccessToken(data.access_token));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    register: build.mutation<ISession, ISignUpDto>({
      query: (body) => ({
        url: `/auth/register`,
        method: 'POST',
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAccessToken(data.access_token));
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = sessionApi;
