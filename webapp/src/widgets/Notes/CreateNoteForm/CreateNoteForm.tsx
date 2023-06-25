import { Form } from 'antd';
import React from 'react';
import { CreateNoteButton } from '@features/Notes';

export const CreateNoteForm: React.FC = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} name={'CreateNoteForm'}>
      <Form.Item name={'title'}>
        <input />
      </Form.Item>
      <Form.Item name={'content'}>
        {/* TODO: add react quill */}
        {/* <ReactQuill /> */}
        <input />
      </Form.Item>
      <Form.Item>
        <CreateNoteButton formData={form} />
      </Form.Item>
    </Form>
  );
};
