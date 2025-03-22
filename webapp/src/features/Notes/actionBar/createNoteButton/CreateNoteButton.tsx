import { Button, FormInstance } from 'antd';
import React from 'react';
import { useCreateNoteMutation } from '@entities/Note';
import { ICreateNoteDto } from '@shared/api';

interface ICreateNoteButtonProps {
  className?: string;
  form: FormInstance<ICreateNoteDto>;
  onSuccess?: (id: string) => void;
}

export const CreateNoteButton: React.FC<ICreateNoteButtonProps> = (props) => {
  const { form, onSuccess } = props;
  const [createNote, { isLoading }] = useCreateNoteMutation();
  const submit = () =>
    createNote(form.getFieldsValue()).then((res) => {
      if ('data' in res) onSuccess?.(res.data.id);
    });

  return (
    <Button onClick={submit} loading={isLoading}>
      Create
    </Button>
  );
};
