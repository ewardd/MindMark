import React from 'react';
import { SignUpForm } from '@features/Auth';
import { ToggleTheme } from '@features/ToggleTheme';
import { EmptyLayout } from '@shared/ui';

export const SignUp: React.FC = () => (
  <EmptyLayout>
    <SignUpForm />

    <ToggleTheme className={'absolute right-4 top-4'} />
  </EmptyLayout>
);
