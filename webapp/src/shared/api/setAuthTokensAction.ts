import { createAction } from '@reduxjs/toolkit';
import { ISession } from '@shared/api';

export const setAuthTokens = createAction<ISession>('SET_AUTH_TOKENS');
