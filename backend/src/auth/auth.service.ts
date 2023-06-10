import { AuthUtils } from 'src/utils/Auth';
import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtResponse } from 'src/auth/dto/jwt-response.dto';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  public constructor(
    @InjectRepository(User)
    private readonly _userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  public signIn = async (email: string, password: string): Promise<JwtResponse> => {
    const user = await this._userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'passwordHash'],
    });

    if (!user || !(await AuthUtils.comparePassword(user.passwordHash, password)))
      throw new UnauthorizedException('Wrong email or password');

    return this.getJwtByUser(user);
  };

  public signUp = async ({ password, ...signUpDto }: SignUpDto): Promise<JwtResponse> => {
    const user = new User();
    Object.assign(user, signUpDto);

    user.passwordHash = await AuthUtils.getPasswordHash(password);

    const newUser = await this._userRepository.save(user);
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
