import { useAppSelector } from '@shared/model';
import { IUser } from './types';

export const useUser = (): IUser | null => {
  const user = useAppSelector((state) => state.userState.user);

  return user;
};
