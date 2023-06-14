import { Layout } from 'antd';
import React from 'react';

interface ILayoutInterface {
  siderSlot?: React.ReactNode;
  children: React.ReactNode;
  headerSlot?: React.ReactNode;
}

export const BaseLayout: React.FC<ILayoutInterface> = (props) => {
  const { children, headerSlot, siderSlot } = props;

  return (
    <Layout className={'common-bg flex h-screen min-w-full'}>
      {siderSlot}

      <Layout className={'common-bg'}>
        {headerSlot}

        <Layout.Content className={'p-4'}>{children}</Layout.Content>
      </Layout>
    </Layout>
  );
};
