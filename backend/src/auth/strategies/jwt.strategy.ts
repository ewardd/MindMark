import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IConfiguration } from 'src/config/configuration';
import { IJwtPayload } from 'src/auth/types/JwtPayload';
import { IUserContext } from 'src/auth/types/RequestContext';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  public constructor(private readonly _config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: _config.get<IConfiguration['auth']['secret']>('auth.secret'),
    });
  }

  public validate = async (payload: IJwtPayload): Promise<IUserContext> => {
    return { id: payload.sub, email: payload.email };
  };
}
