import React from 'react';

interface IUnauthorizedLayoutProps {
  children: React.ReactNode;
}

export const UnauthorizedLayout: React.FC<IUnauthorizedLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className={'common-bg flex h-screen min-w-full items-center justify-center'}>
      <div className={'rounded-xl border border-solid border-gray-400 p-4 shadow-md'}>{children}</div>
    </div>
  );
};
