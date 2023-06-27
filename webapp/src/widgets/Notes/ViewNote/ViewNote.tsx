import React from 'react';
import { useParams } from 'react-router';
import { useGetNoteQuery } from '@entities/Note';

interface IViewNoteProps {}

export const ViewNote: React.FC<IViewNoteProps> = () => {
  const { id } = useParams();
  const { note } = useGetNoteQuery(id);

  return (
    <>
      {/* <Typography.Title>{params}</Typography.Title> */}
      {/* <Typography.Text>{note.content}</Typography.Text> */}
    </>
  );
};
