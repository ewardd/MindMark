import { Layout, Spin } from 'antd';
import React from 'react';

export const LoadingPage: React.FC = () => (
  <Layout className={'h-screen justify-center items-center'}>
    <Spin size={'large'} />
  </Layout>
);
