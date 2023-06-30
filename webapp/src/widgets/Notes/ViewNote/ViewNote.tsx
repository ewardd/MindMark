import { Typography } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router';
import { useGetNoteQuery } from '@entities/Note';
import 'react-quill/dist/quill.bubble.css';

export const ViewNoteContents: React.FC = () => {
  const { id } = useParams();
  const { data: note } = useGetNoteQuery(id!, { skip: !id });

  return (
    <div>
      <Typography.Title>{note?.title}</Typography.Title>

      <ReactQuill value={note?.content} readOnly theme={'bubble'} />
    </div>
  );
};
