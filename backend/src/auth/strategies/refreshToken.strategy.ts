import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IConfiguration } from 'src/config/configuration';
import { IJwtPayload } from 'src/auth/types/JwtPayload';
import { IUserRefreshContext } from 'src/auth/types/RequestContext';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class RefreshTokenStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  public constructor(private readonly _config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: _config.get<IConfiguration['authRefresh']['secret']>('authRefresh.secret'),
      passReqToCallback: true,
    });
  }

  public validate(req: Request, { sub, email }: Record<string, unknown> & IJwtPayload): IUserRefreshContext | null {
    const authHeader = req.get('Authorization');
    if (typeof authHeader !== 'string') return null;
    // TODO: Validate if user exist

    const refreshToken = authHeader.replace('Bearer', '').trim();
    return { id: sub, email, refreshToken };
  }
}
