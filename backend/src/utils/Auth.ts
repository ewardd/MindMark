import { BadRequestException } from '@nestjs/common';
import { compare, hash } from 'bcrypt';

export class AuthUtils {
  public static getPasswordHash = async (password: string | null | undefined): Promise<string> => {
    if (!password) throw new BadRequestException('Empty password');

    return hash(password, 10);
  };

  public static comparePassword = async (
    passwordHash: string | null | undefined,
    password: string | null | undefined,
  ): Promise<boolean> => {
    if (!password) throw new BadRequestException('Empty password');
    if (!passwordHash) throw new BadRequestException();

    return compare(password, passwordHash);
  };
}
