import { Form } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import { CreateNoteButton } from '@features/Notes';
import 'react-quill/dist/quill.snow.css';

export const CreateNoteForm: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} name={'CreateNoteForm'}>
      <Form.Item name={'title'}>
        <input />
      </Form.Item>
      <Form.Item name={'content'}>
        <ReactQuill />
      </Form.Item>
      <Form.Item>
        <CreateNoteButton formData={form} />
      </Form.Item>
    </Form>
  );
};
