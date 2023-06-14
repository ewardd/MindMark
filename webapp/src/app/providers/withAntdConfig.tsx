import { ConfigProvider, theme } from 'antd';
import React, { useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';

export const withAntdConfig = (component: () => React.ReactNode) => () => {
  const [isDarkTheme] = useLocalStorage('darkTheme', window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    if (isDarkTheme) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkTheme]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkTheme ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      {component()}
    </ConfigProvider>
  );
};
