import React from 'react';
import { BaseHeader } from '@widgets/Header';
import { NotesTree, ViewNoteContents } from '@widgets/Notes';
import { BaseLayout, BaseSider } from '@shared/ui';

export const ViewNote: React.FC = () => {
  return (
    <BaseLayout headerSlot={<BaseHeader />} siderSlot={<BaseSider children={<NotesTree />} />}>
      <ViewNoteContents />
    </BaseLayout>
  );
};
