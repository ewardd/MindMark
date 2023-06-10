import React from 'react';
import BaseHeader from '@widgets/Header';
import BaseSider from '@widgets/Sider';
import BaseLayout from '@shared/ui';

interface ISignUpProps {
  className?: string;
}

export const SignUp: React.FC<ISignUpProps> = (props) => {
  const { className } = props;

  return (
    <BaseLayout headerSlot={<BaseHeader />} siderSlot={<BaseSider />}>
      <div className={className}>Placeholder</div>
    </BaseLayout>
  );
};
