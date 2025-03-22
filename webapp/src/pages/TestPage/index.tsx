import { Typography } from 'antd';
import { BaseHeader } from '@widgets/Header';
import { NotesTree } from '@widgets/Notes';
import { useMeQuery } from '@entities/User';
import { BaseLayout, BaseSider } from '@shared/ui';

// TODO: Remove
const TestPage = () => {
  const { data } = useMeQuery();
  return (
    <BaseLayout headerSlot={<BaseHeader />} siderSlot={<BaseSider children={<NotesTree />} />}>
      <Typography.Text>Auth done - {data?.email}</Typography.Text>
    </BaseLayout>
  );
};

export default TestPage;
