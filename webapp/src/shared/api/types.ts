interface IBaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISession {
  accessToken: string;
  refreshToken: string;
}

export interface IUser extends IBaseEntity {
  email: string;
}

export interface INote extends IBaseEntity {
  key: string;
  author: IUser;
  title: string;
  content: string;
  isCompleted?: boolean;
  parent: INote;
  children: INote[];
}
