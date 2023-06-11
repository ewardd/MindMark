import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useIsAuthenticated, useLoginMutation } from '@entities/Session';

export const SignInForm: React.FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) return;
    // TODO: Think where routes should be
    navigate('/dashboard');
  }, [isAuthenticated, navigate]);

  const [login, { isLoading }] = useLoginMutation();

  return (
    <Form layout={'vertical'} onFinish={login}>
      <Form.Item label={'Email'} name={'email'}>
        <Input autoComplete={'email'} />
      </Form.Item>

      <Form.Item label={'Password'} name={'password'}>
        <Input.Password autoComplete={'current-password'} />
      </Form.Item>

      <Form.Item className={'mb-2'}>
        <Button loading={isLoading} block type={'primary'} htmlType={'submit'}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};
