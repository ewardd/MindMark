import { Typography } from 'antd';
import { BaseHeader } from '@widgets/Header';
import { BaseSider } from '@widgets/Sider';
import { useMeQuery } from '@entities/User';
import { BaseLayout } from '@shared/ui';

export const CreateNote = () => {
  const { data } = useMeQuery();

  return (
    <BaseLayout headerSlot={<BaseHeader />} siderSlot={<BaseSider />}>
      <Typography.Text>Auth done - {data?.email}</Typography.Text>
    </BaseLayout>
  );
};
