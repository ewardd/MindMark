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
}

export interface IUpdateNoteDto {
  id: string;
  title: string;
  content: string;
  isCompleted?: boolean;
}
