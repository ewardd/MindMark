import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';

export type IUserContext = Pick<User, 'id' | 'email'>;

export interface IUserRefreshContext extends IUserContext, Record<string, unknown> {
  refreshToken: string;
}

export interface IRequestContext extends Request {
  user: IUserContext;
}
