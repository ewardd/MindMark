import { Layout } from 'antd';
import React from 'react';
import { ToggleTheme } from '@features/ToggleTheme';
import { IUserProfileProps, UserProfile } from '@entities/User';
import styles from './styles.module.scss';

interface IBaseHeaderProps {
  className?: string;
}

export const BaseHeader: React.FC<IBaseHeaderProps> = () => {
  const items: IUserProfileProps['items'] = [
    {
      key: 'logout',
      label: <Logout />,
    },
  ];

  return (
    <Layout.Header className={'layout-bg flex flex-row justify-end'}>
      <div className={styles.userProfile}>
        <UserProfile items={items} userName={'Eward'} />
        <ToggleTheme />
    </Layout.Header>
  );
};
