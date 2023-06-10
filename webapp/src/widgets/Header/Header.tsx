import { Layout } from 'antd';
import React from 'react';
import { Logout } from '@features/Header';
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
    <Layout.Header className={'flex flex-row justify-end'}>
      <div className={styles.userProfile}>
        <UserProfile items={items} userName={'Eward'} />
      </div>
    </Layout.Header>
  );
};
