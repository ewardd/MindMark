import { Layout } from 'antd';
import React from 'react';

interface ILayoutInterface {
  siderSlot: React.ReactNode;
  children: React.ReactNode;
  headerSlot: React.ReactNode;
  footerSlot: React.ReactNode;
}

export const BaseLayout: React.FC<ILayoutInterface> = (props) => {
  const { children, footerSlot, headerSlot, siderSlot } = props;

  return (
    <Layout>
      <Layout.Sider>{siderSlot}</Layout.Sider>
      <Layout>
        <Layout.Header>{headerSlot}</Layout.Header>
        <Layout.Content>{children}</Layout.Content>
        <Layout.Footer>{footerSlot}</Layout.Footer>
      </Layout>
    </Layout>
  );
};
