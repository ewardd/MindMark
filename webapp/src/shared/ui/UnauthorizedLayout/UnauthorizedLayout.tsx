import React from 'react';

interface IUnauthorizedLayoutProps {
  children: React.ReactNode;
}

export const UnauthorizedLayout: React.FC<IUnauthorizedLayoutProps> = (props) => {
  const { children } = props;

  return (
    <div className={'flex justify-center items-center min-w-full h-screen'}>
      <div className={'border border-gray-400 shadow-md border-solid rounded-xl p-4'}>{children}</div>
    </div>
  );
};
