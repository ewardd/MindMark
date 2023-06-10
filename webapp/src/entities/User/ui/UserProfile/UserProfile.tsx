import { Dropdown, MenuProps } from 'antd';
import React from 'react';
import styles from './styles.module.scss';

export interface IUserProfileProps {
  items: MenuProps['items'];
  userName: string;
}
export const UserProfile: React.FC<IUserProfileProps> = (props) => {
  const { items, userName } = props;

  return (
    <div className={styles.container}>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>{userName}</a>
      </Dropdown>
    </div>
  );
};
