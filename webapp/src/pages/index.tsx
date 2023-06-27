import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { WithAuth } from '@widgets/Auth';

const SignIn = lazy(() => import('@pages/SignIn'));
const SignUp = lazy(() => import('@pages/SignUp'));
const TestPage = lazy(() => import('@pages/TestPage'));
const CreateNote = lazy(() => import('@pages/Notes').then((module) => ({ default: module.CreateNote })));
const ViewNote = lazy(() => import('@pages/Notes').then((module) => ({ default: module.ViewNote })));

export const Routing = () => {
  return (
    <Routes>
      <Route path={'/sign-in'} element={<SignIn />} />
      <Route path={'/register'} element={<SignUp />} />
      <Route path={'*'} element={<Navigate to={'/sign-in'} replace />} />

      <Route element={<WithAuth />}>
        <Route path={'/dashboard'} element={<TestPage />} />
        <Route path={'/create-note'} element={<CreateNote />} />
        <Route path={'/note/:id'} element={<ViewNote />} />
      </Route>
    </Routes>
  );
};
