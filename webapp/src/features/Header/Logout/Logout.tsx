import { Button } from 'antd';
import React from 'react';
import { useLogout } from '@shared/hooks';

export const ExitButton: React.FC = () => {
  const logout = useLogout();

  return <Button onClick={logout}>Logout</Button>;
};
