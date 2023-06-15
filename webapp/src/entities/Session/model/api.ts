import { baseApi, ISession, ISignInDto, ISignUpDto, setAuthTokens } from '@shared/api';

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
          dispatch(setAuthTokens(data));
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
          dispatch(setAuthTokens(data));
        } catch (error) {
          console.error(error);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = sessionApi;
