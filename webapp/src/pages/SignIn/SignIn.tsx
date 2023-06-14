import React from 'react';
import { SignInForm } from '@features/Auth';
import { ToggleTheme } from '@features/ToggleTheme';
import { EmptyLayout } from '@shared/ui';

export const SignIn: React.FC = () => (
  <EmptyLayout>
    <SignInForm />

    <ToggleTheme className={'absolute right-4 top-4'} />
  </EmptyLayout>
);
