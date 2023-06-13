import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '@entities/Session';

export const ExitButton: React.FC = () => {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(logout())}>Logout</Button>;
};
