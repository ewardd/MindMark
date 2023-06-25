import { Typography } from 'antd';
import { BaseHeader } from '@widgets/Header';
import { BaseSider } from '@widgets/Sider';
import { useMeQuery } from '@entities/User';
import { BaseLayout } from '@shared/ui';

// TODO: Remove
const TestPage = () => {
  const { data } = useMeQuery();
  return (
    <BaseLayout headerSlot={<BaseHeader />} siderSlot={<BaseSider />}>
      <Typography.Text>Auth done - {data?.email}</Typography.Text>
    </BaseLayout>
  );
};

export default TestPage;
