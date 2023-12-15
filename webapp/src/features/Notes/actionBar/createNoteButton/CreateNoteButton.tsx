import { Button, FormInstance } from 'antd';
import React from 'react';
import { useCreateNoteMutation } from '@entities/Note';
import { ICreateNoteDto } from '@shared/api';

interface ICreateNoteButtonProps {
  className?: string;
  form: FormInstance<ICreateNoteDto>;
}

export const CreateNoteButton: React.FC<ICreateNoteButtonProps> = (props) => {
  const { form } = props;
  const [createNote, { isLoading }] = useCreateNoteMutation();
  const submit = () => createNote(form.getFieldsValue());

  return (
    <Button onClick={submit} loading={isLoading}>
      Create
    </Button>
  );
};
