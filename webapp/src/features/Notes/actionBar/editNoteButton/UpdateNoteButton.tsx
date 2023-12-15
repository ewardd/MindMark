import { Button, FormInstance } from 'antd';
import React from 'react';
import { useUpdateNoteMutation } from '@entities/Note';
import { IUpdateNoteDto } from '@shared/api';

interface IEditNoteButtonProps {
  className?: string;
  form: FormInstance<IUpdateNoteDto>;
  onSuccess?: () => void;
}
// TODO: ПЕРЕИМЕНУЙ МЕНЯ БЛЯТЬ
export const EditNoteButton: React.FC<IEditNoteButtonProps> = (props) => {
  const { form, onSuccess } = props;
  const [updateNote, { isLoading }] = useUpdateNoteMutation();
  const submit = () =>
    updateNote(form.getFieldsValue()).then((res) => {
      if ('data' in res) onSuccess?.();
    });

  return (
    <Button onClick={submit} loading={isLoading}>
      Submit
    </Button>
  );
};
