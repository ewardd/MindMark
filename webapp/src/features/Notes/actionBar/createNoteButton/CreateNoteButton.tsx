import { Button, FormInstance } from 'antd';
import React from 'react';
import { useCreateNoteMutation } from '@entities/Note';

interface ICreateNoteButtonProps {
  className?: string;
  formData: FormInstance;
}

export const CreateNoteButton: React.FC<ICreateNoteButtonProps> = (props) => {
  const { formData } = props;
  const [createNote, result] = useCreateNoteMutation();
  const submit = () =>
    createNote({ title: formData.getFieldValue('title'), content: formData.getFieldValue('content') });

  return <Button onClick={submit} />;
};
