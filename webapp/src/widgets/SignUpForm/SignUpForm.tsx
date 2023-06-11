import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useIsAuthenticated, useRegisterMutation } from '@entities/Session';

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) return;
    // TODO: Think where routes should be
    navigate('/dashboard');
  }, [isAuthenticated, navigate]);

  const [register, { isLoading }] = useRegisterMutation();
  return (
    <Form onFinish={register} layout={'vertical'}>
      <Form.Item label={'Email'} name={'email'}>
        <Input />
      </Form.Item>
      <Form.Item label={'Password'} name={'password'}>
        <Input />
      </Form.Item>
      {/* TODO : add rules */}

      {/* <Form.Item label={'Confirm password'} name={'confirm-password'}>
        <Input />
      </Form.Item> */}
      <Form.Item className={'mb-2'}>
        <Button loading={isLoading} block type={'primary'} htmlType={'submit'}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
