import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useIsAuthenticated } from '@entities/Session';
import { useMeQuery } from '@entities/User';
import { LoadingPage } from '@shared/ui';

export const WithAuth: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  const { isLoading } = useMeQuery(undefined, { skip: !isAuthenticated });

  if (!isAuthenticated) {
    return <Navigate to={'/'} replace />;
  }

  if (isLoading) return <LoadingPage />;

  return <Outlet />;
};
