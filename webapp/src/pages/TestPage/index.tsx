import { Typography } from 'antd';
import Header from '@widgets/Header/ui';
import { BaseSider } from '@widgets/Sider/ui';
import { useMeQuery } from '@entities/User';
import { BaseLayout } from '@shared/ui';

// TODO: Remove
const TestPage = () => {
  const { data } = useMeQuery();

  return (
    <BaseLayout headerSlot={<Header />} siderSlot={<BaseSider />}>
      <Typography.Text>Auth done - {data?.email}</Typography.Text>
    </BaseLayout>
  );
};

export default TestPage;
