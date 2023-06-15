import { createAction } from '@reduxjs/toolkit';
import { ISession } from '@shared/api';

export const setAuthTokens = createAction<ISession>('SET_AUTH_TOKENS');

export const isTokensResult = (data: unknown): data is ISession => {
  if (!data) return false;
  if (typeof data !== 'object') return false;
  if (!('accessToken' in data && 'refreshToken' in data)) return false;

  return true;
};
