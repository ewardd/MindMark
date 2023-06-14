import { Layout, Space } from 'antd';
import React from 'react';
import { ToggleTheme } from '@features/ToggleTheme';
import { IUserProfileProps, UserProfile } from '@entities/User';
import { useLogout } from '@shared/hooks';

interface IBaseHeaderProps {
  className?: string;
}

export const BaseHeader: React.FC<IBaseHeaderProps> = () => {
  const logout = useLogout();

  // TODO: Think how to make the logout button (menu feature-set) better
  const items: IUserProfileProps['items'] = [
    {
      key: 'logout',
      label: 'Logout',
      onClick: logout,
    },
  ];

  return (
    <Layout.Header className={'layout-bg flex flex-row justify-end'}>
      <Space direction={'horizontal'} size={'large'}>
        <UserProfile items={items} userName={'Eward'} />

        <ToggleTheme />
      </Space>
    </Layout.Header>
  );
};
