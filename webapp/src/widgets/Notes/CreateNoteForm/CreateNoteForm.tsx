import { Form } from 'antd';
import React from 'react';
import ReactQuill from 'react-quill';
import { useNavigate } from 'react-router';
import { CreateNoteButton } from '@features/Notes';
import 'react-quill/dist/quill.snow.css';
import { ICreateNoteDto } from '@shared/api';

export const CreateNoteForm: React.FC = () => {
  const [form] = Form.useForm<ICreateNoteDto>();
  const navigate = useNavigate();
  const onSuccess = (id: string) => navigate(`/note/${id}`);
  return (
    <Form form={form} name={'CreateNoteForm'}>
      <Form.Item name={'title'} initialValue={''}>
        <input />
      </Form.Item>

      <Form.Item name={'content'} initialValue={''}>
        <ReactQuill />
      </Form.Item>

      <Form.Item>
        <CreateNoteButton form={form} onSuccess={onSuccess} />
      </Form.Item>
    </Form>
  );
};
