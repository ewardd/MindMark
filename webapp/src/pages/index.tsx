import { lazy } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';

const SignUp = lazy(() => import('@pages/SignUp'));

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/SignUp'} element={<SignUp />} />
      {/* <Route path="/lab" element={<Lab />} />  */}
      <Route path={'*'} element={<Navigate to={'/'} replace />} />
    </Routes>
  );
};
