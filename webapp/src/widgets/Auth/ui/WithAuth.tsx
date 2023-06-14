import React from 'react';
import { Navigate, Outlet } from 'react-router';
import { useIsAuthenticated } from '@entities/Session';

export const WithAuth: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();

  if (!isAuthenticated) return <Navigate to={'/'} replace />;

  return <Outlet />;
};
