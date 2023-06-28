import { Typography } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router';
import { useGetNoteQuery } from '@entities/Note';
import 'react-quill/dist/quill.bubble.css';

interface IViewNoteProps {}

export const ViewNote: React.FC<IViewNoteProps> = () => {
  const { id } = useParams();
  const { data: note } = useGetNoteQuery(id!, { skip: !id });

  return (
    <>
      <Typography.Title>{note?.title}</Typography.Title>
      <ReactQuill value={note?.content} readOnly theme={'bubble'} />
    </>
  );
};
