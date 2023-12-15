import { Tree } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { NotesTreeRow, useGetNotesQuery } from '@entities/Note';

export const NotesTree: React.FC = () => {
  const notesTree = useGetNotesQuery();

  return (
    notesTree && (
      <>
        <Link className={'flex py-2 pl-[27px]'} to={`/note/create`}>
          Create new Note
        </Link>
        {notesTree.data && (
          <Tree
            className={'py-1'}
            height={400}
            titleRender={(element) => <NotesTreeRow note={element} />}
            treeData={notesTree.data}
          />
        )}
      </>
    )
  );
};
