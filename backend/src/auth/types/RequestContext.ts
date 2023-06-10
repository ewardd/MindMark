import { Request } from 'express';
import { User } from 'src/users/entities/user.entity';

export type IUserContext = Pick<User, 'id' | 'email'>;

export interface IRequestContext extends Request {
  user: IUserContext;
}
