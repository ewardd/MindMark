import { useAppSelector } from '@shared/hooks';

export const useIsAuthenticated = () => {
  const isAuthenticated = useAppSelector((state) => state.sessionState.accessToken);

  return !!isAuthenticated;
};
