import React from 'react';
import { Link } from 'react-router-dom';
import { ITreeNoteDto } from '@shared/api';

interface INotesTreeRowProps {
  note: ITreeNoteDto;
}

export const NotesTreeRow: React.FC<INotesTreeRowProps> = (props) => {
  const { note } = props;

  return <Link to={`/note/${note.id}`}>{note.title}</Link>;
};
