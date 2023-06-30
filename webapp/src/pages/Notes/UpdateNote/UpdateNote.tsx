import React from 'react';
import { BaseHeader } from '@widgets/Header';
import { NotesTree, UpdateNoteForm } from '@widgets/Notes';
import { BaseLayout, BaseSider } from '@shared/ui';

export const UpdateNote: React.FC = () => {
  return (
    <BaseLayout headerSlot={<BaseHeader />} siderSlot={<BaseSider children={<NotesTree />} />}>
      <UpdateNoteForm />
    </BaseLayout>
  );
};
