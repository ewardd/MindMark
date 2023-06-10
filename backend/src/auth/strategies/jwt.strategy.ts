import { ExtractJwt, Strategy } from 'passport-jwt';
import { IJwtPayload } from 'src/auth/types/JwtPayload';
import { IUserContext } from 'src/auth/types/RequestContext';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      // TODO: Move to ENV
      secretOrKey: 'SECRET',
    });
  }

  public validate = async (payload: IJwtPayload): Promise<IUserContext> => {
    return { id: payload.sub, email: payload.email };
  };
}
