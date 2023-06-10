import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { WithAuth } from '@widgets/Auth';

const SignIn = lazy(() => import('@pages/SignIn'));
const TestPage = lazy(() => import('@pages/TestPage'));

export const Routing = () => {
  return (
    <Routes>
      <Route element={<WithAuth />}>
        <Route path={'/dashboard'} element={<TestPage />} />
      </Route>

      <Route path={'/sign-in'} element={<SignIn />} />

      <Route path={'*'} element={<Navigate to={'/sign-in'} replace />} />
    </Routes>
  );
};
