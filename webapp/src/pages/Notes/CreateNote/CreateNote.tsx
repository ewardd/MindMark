import React from 'react';
import { BaseHeader } from '@widgets/Header';
import { CreateNoteForm, NotesTree } from '@widgets/Notes';
import { BaseLayout, BaseSider } from '@shared/ui';

export const CreateNote: React.FC = () => {
  return (
    <BaseLayout headerSlot={<BaseHeader />} siderSlot={<BaseSider children={<NotesTree />} />}>
      <CreateNoteForm />
    </BaseLayout>
  );
};
