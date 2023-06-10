import { AuthUtils } from 'src/utils/Auth';
import { BadRequestException, ConflictException, Injectable } from '@nestjs/common';
import { IJwtPayload } from 'src/auth/types/JwtPayload';
import { IUserContext } from 'src/auth/types/RequestContext';
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
    private readonly _jwtService: JwtService,
  ) {}

  public validateUser = async (email: string, password: string): Promise<User | null> => {
    const user = await this._userRepository.findOne({
      where: { email },
      select: ['id', 'email', 'passwordHash'],
    });

    if (!user) return null;

    const isSamePassword = await AuthUtils.comparePassword(user.passwordHash, password);
    if (!isSamePassword) return null;

    return user;
  };

  public async login(user: IUserContext): Promise<JwtResponse> {
    const payload: IJwtPayload = { email: user.email, sub: user.id };

    return {
      access_token: this._jwtService.sign(payload),
    };
  }

  public registerUser = async ({ password, ...signUpDto }: SignUpDto): Promise<JwtResponse> => {
    if (await this.checkExistingUser(signUpDto.email))
      throw new ConflictException('User with this Email is already registered');

    const user = new User();
    Object.assign(user, signUpDto);

    user.passwordHash = await AuthUtils.getPasswordHash(password);

    const newUser = await this._userRepository.save(user);
    if (!newUser?.id) throw new BadRequestException('Failed to register');

    return this.login(user);
  };

  private readonly checkExistingUser = async (email: string): Promise<boolean> => {
    const foundUser = await this._userRepository.findOneBy({ email });

    return !!foundUser;
  };
}
