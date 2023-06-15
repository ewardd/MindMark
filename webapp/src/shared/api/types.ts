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
