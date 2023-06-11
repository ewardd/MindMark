import { Button, Form, Input } from 'antd';
import React from 'react';

export const SignUpForm: React.FC = () => {
  const onSubmit = () => {};
  return (
    <Form onFinish={onSubmit} layout={'vertical'}>
      <Form.Item label={'Username'} name={'username'}>
        <Input />
      </Form.Item>
      <Form.Item label={'Password'} name={'password'}>
        <Input />
      </Form.Item>
      <Form.Item label={'Confirm password'} name={'confirm-password'}>
        <Input />
      </Form.Item>
      <Form.Item className={'mb-2'}>
        <Button block type={'primary'} htmlType={'submit'}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
