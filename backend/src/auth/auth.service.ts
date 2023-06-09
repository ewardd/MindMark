import { AuthUtils } from 'src/utils/Auth';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtResponse } from 'src/auth/dto/jwt-response.dto';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  public constructor(private readonly _usersService: UsersService, private readonly jwtService: JwtService) {}

  public signIn = async (email: string, password: string): Promise<JwtResponse> => {
    const user = await this._usersService.findOneByEmail(email);

    if (!user || !(await AuthUtils.comparePassword(user.passwordHash, password)))
      throw new UnauthorizedException('Wrong email or password');

    return this.getJwtByUser(user);
  };

  public signUp = async ({ password, ...signUpDto }: SignUpDto): Promise<JwtResponse> => {
    const user = new User();
    Object.assign(user, signUpDto);

    user.passwordHash = await AuthUtils.getPasswordHash(password);

    const newUser = await this._usersService.create(user);
    if (!newUser?.id) throw new BadRequestException('Failed to register');

    return this.getJwtByUser(user);
  };

  private readonly getJwtByUser = async (user: User): Promise<JwtResponse> => {
    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  };
}
