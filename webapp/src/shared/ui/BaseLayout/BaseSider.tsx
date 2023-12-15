import { Layout } from 'antd';
import React from 'react';

interface IBaseSiderProps {
  children: React.ReactNode;
  headerSlot?: React.ReactNode;
}

export const BaseSider: React.FC<IBaseSiderProps> = (props) => {
  const { headerSlot, children } = props;

  return (
    <Layout.Sider width={'400px'} className={'layout-bg min-h-screen'}>
      <Layout>
        <Layout.Header>{headerSlot}</Layout.Header>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </Layout.Sider>
  );
};
