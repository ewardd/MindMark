import { BaseHeader } from '@widgets/Header';
import { CreateNoteForm } from '@widgets/Notes';
import { BaseSider } from '@widgets/Sider';
import { BaseLayout } from '@shared/ui';

export const CreateNote = () => {
  return (
    <BaseLayout headerSlot={<BaseHeader />} siderSlot={<BaseSider />}>
      <CreateNoteForm />
    </BaseLayout>
  );
};
