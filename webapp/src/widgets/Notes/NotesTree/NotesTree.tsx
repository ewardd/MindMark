import { Tree } from 'antd';
import React from 'react';
import { NotesTreeRow, useGetNotesQuery } from '@entities/Note';

export const NotesTree: React.FC = () => {
  const notesTree = useGetNotesQuery();

  return notesTree && <Tree titleRender={(element) => <NotesTreeRow note={element} />} treeData={notesTree.data} />;
};
