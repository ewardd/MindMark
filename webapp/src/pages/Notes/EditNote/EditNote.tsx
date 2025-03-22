import React from 'react';
import { BaseHeader } from '@widgets/Header';
import { EditNoteForm, NotesTree } from '@widgets/Notes';
import { BaseLayout, BaseSider } from '@shared/ui';

export const EditNote: React.FC = () => {
  return (
    <BaseLayout headerSlot={<BaseHeader />} siderSlot={<BaseSider children={<NotesTree />} />}>
      <EditNoteForm />
    </BaseLayout>
  );
};
