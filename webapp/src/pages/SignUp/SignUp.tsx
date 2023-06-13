import React from 'react';
import { SignUpForm } from '@features/Auth';
import { EmptyLayout } from '@shared/ui';

export const SignUp: React.FC = () => (
  <EmptyLayout>
    <SignUpForm />
  </EmptyLayout>
);
