import { Layout, Spin } from 'antd';
import React from 'react';

export const LoadingPage: React.FC = () => (
  <Layout className={'common-bg h-screen items-center justify-center'}>
    <Spin size={'large'} />
  </Layout>
);
