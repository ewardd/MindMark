import { IUser } from '@shared/api';
import { useAppSelector } from '@shared/hooks';

export const useUser = (): IUser | null => {
  const user = useAppSelector((state) => state.userState.user);

  return user;
};
