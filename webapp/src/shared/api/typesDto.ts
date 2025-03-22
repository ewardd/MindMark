import { IBaseEntity } from './types';

export interface ISignInDto {
  email: string;
  password: string;
}

export interface ISignUpDto {
  email: string;
  password: string;
}

export interface ICreateNoteDto {
  title: string;
  content: string;
  parent?: string;
}

export interface IUpdateNoteDto {
  id: string;
  title: string;
  content: string;
  isCompleted?: boolean;
}

export interface ITreeNoteDto extends IBaseEntity {
  id: string;
  key: string;
  title: string;
  children: ITreeNoteDto[];
}
