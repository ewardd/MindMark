import React from 'react';
import { Link } from 'react-router-dom';
import { INote } from '@shared/api';

interface INotesTreeRowProps {
  note: INote;
}

export const NotesTreeRow: React.FC<INotesTreeRowProps> = (props) => {
  const { note } = props;

  return <Link to={`/note/${note.id}`}>{note.title}</Link>;
};
