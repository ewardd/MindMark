import { Form, Input } from 'antd';
import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useNavigate, useParams } from 'react-router';
import { EditNoteButton } from '@features/Notes';
import { useGetNoteQuery } from '@entities/Note';

export const EditNoteForm: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { data: note } = useGetNoteQuery(id!, { skip: !id });
  const navigate = useNavigate();
  const onSuccess = () => navigate(`..`);

  useEffect(() => form.setFieldsValue(note), [form, note]);

  return (
    <Form form={form} name={'CreateNoteForm'}>
      <Form.Item name={'id'} hidden>
        <Input />
      </Form.Item>

      <Form.Item name={'title'} initialValue={''}>
        <Input />
      </Form.Item>

      <Form.Item name={'content'} initialValue={''}>
        <ReactQuill />
      </Form.Item>

      <Form.Item>
        <EditNoteButton form={form} onSuccess={onSuccess} />
      </Form.Item>
    </Form>
  );
};
