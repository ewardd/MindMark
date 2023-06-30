import { Form, Input } from 'antd';
import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router';
import { UpdateNoteButton } from '@features/Notes';
import { useGetNoteQuery } from '@entities/Note';

export const UpdateNoteForm: React.FC = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const { data: note } = useGetNoteQuery(id!, { skip: !id });

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
        <UpdateNoteButton form={form} />
      </Form.Item>
    </Form>
  );
};
