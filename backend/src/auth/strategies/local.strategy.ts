import { AuthService } from 'src/auth/auth.service';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  public constructor(private readonly authService: AuthService) {
    super({ usernameField: 'email' });
  }

  public validate = async (email: string, password: string): Promise<User> => {
    const user = await this.authService.validateUser(email, password);

    if (!user) throw new UnauthorizedException('Wrong email or password');

    return user;
  };
}
