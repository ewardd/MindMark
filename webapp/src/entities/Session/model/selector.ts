import { useAppSelector } from '@shared/model';

export const useIsAuthenticated = () => {
  const isAuthenticated = useAppSelector((state) => state.sessionState.accessToken);

  return !!isAuthenticated;
};
