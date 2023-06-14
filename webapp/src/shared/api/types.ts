interface IBaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISession {
  access_token: string;
}

export interface IUser extends IBaseEntity {
  email: string;
}
