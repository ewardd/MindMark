import { Button, FormInstance } from 'antd';
import React from 'react';
import { useUpdateNoteMutation } from '@entities/Note';
import { IUpdateNoteDto } from '@shared/api';

interface IUpdateNoteButtonProps {
  className?: string;
  form: FormInstance<IUpdateNoteDto>;
}

export const UpdateNoteButton: React.FC<IUpdateNoteButtonProps> = (props) => {
  const { form } = props;
  const [updateNote, { isLoading }] = useUpdateNoteMutation();
  const submit = () => updateNote(form.getFieldsValue());

  return <Button onClick={submit} loading={isLoading} />;
};
