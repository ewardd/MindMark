import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { ISignInDto, useIsAuthenticated, useLoginMutation } from '@entities/Session';

// TODO: Move to feature
export const SignIn: React.FC = () => {
  const navigate = useNavigate();

  const [form] = Form.useForm<ISignInDto>();

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) return;
    // TODO: Think where routes should be
    navigate('/dashboard');
  }, [isAuthenticated, navigate]);

  const [login, { isLoading }] = useLoginMutation();

  return (
    <Form form={form} onFinish={login}>
      <Form.Item name={'email'}>
        <Input autoComplete={'email'} />
      </Form.Item>

      <Form.Item name={'password'}>
        <Input.Password autoComplete={'current-password'} />
      </Form.Item>

      <Form.Item>
        <Button htmlType={'submit'} loading={isLoading}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};
