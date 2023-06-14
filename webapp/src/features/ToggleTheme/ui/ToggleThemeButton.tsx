import { BulbOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';
import React from 'react';
import { useLocalStorage } from 'usehooks-ts';

interface IToggleThemeButtonProps {
  className?: string;
}

export const ToggleThemeButton: React.FC<IToggleThemeButtonProps> = (props) => {
  const { className } = props;

  const [isDarkTheme, setIsDarkTheme] = useLocalStorage(
    'darkTheme',
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  );

  const onThemeChange = () => setIsDarkTheme((state) => !state);

  return (
    <Tooltip title={isDarkTheme ? 'White theme' : 'Dark theme'}>
      <Button onClick={onThemeChange} icon={<BulbOutlined />} className={className} />
    </Tooltip>
  );
};
