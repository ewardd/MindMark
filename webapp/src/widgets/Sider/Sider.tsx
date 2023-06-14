import { Layout } from 'antd';
import React from 'react';

interface IBaseSiderProps {}

export const BaseSider: React.FC<IBaseSiderProps> = () => {
  return <Layout.Sider width={'400px'} className={'layout-bg min-h-screen'}></Layout.Sider>;
};
