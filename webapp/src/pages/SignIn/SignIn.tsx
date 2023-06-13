import React from 'react';
import { SignInForm } from '@features/Auth';
import { EmptyLayout } from '@shared/ui';

export const SignIn: React.FC = () => (
  <EmptyLayout>
    <SignInForm />
  </EmptyLayout>
);
