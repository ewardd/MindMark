import { Avatar, Button, Dropdown, MenuProps } from 'antd';
import React from 'react';

export interface IUserProfileProps {
  items: MenuProps['items'];
  userName: string;
}
export const UserProfile: React.FC<IUserProfileProps> = (props) => {
  const { items, userName } = props;

  return (
    <Dropdown menu={{ items, onClick: ({ domEvent }) => domEvent.preventDefault() }} trigger={['click']}>
      <Button type={'text'} className={'space-x-2'}>
        <Avatar shape={'circle'} size={'small'}>
          {userName.slice(0, 2)}
        </Avatar>

        {userName}
      </Button>
    </Dropdown>
  );
};
