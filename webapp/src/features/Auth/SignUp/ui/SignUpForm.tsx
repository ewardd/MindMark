import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useIsAuthenticated, useRegisterMutation } from '@entities/Session';

export const SignUpForm: React.FC = () => {
  const navigate = useNavigate();

  const isAuthenticated = useIsAuthenticated();

  useEffect(() => {
    if (!isAuthenticated) return;
    // TODO: [MM-61] Think where routes should be
    navigate('/dashboard');
  }, [isAuthenticated, navigate]);

  const [register, { isLoading }] = useRegisterMutation();
  return (
    <Form onFinish={register} layout={'vertical'}>
      <Form.Item label={'Email'} name={'email'}>
        <Input autoComplete={'email'} />
      </Form.Item>

      <Form.Item label={'Password'} name={'password'}>
        <Input autoComplete={'new-password'} />
      </Form.Item>

      {/* TODO: [MM-69] add rules */}

      {/* <Form.Item label={'Confirm password'} name={'confirm-password'}>
        <Input autoComplete={'new-password'}/>
      </Form.Item> */}

      <Form.Item className={'mb-2'}>
        <Button loading={isLoading} block type={'primary'} htmlType={'submit'}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
