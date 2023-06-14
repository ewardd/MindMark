import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IConfiguration } from 'src/config/configuration';
import { IUserContext, IUserRefreshContext } from 'src/auth/types/RequestContext';
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

  public validate(req: Request, payload: Record<string, unknown> & IUserContext): IUserRefreshContext | null {
    const authHeader = req.get('Authorization');
    if (typeof authHeader !== 'string') return null;

    const refreshToken = authHeader.replace('Bearer', '').trim();
    return { ...payload, refreshToken };
  }
}
