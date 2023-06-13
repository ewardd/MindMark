import { AuthGuard, IAuthGuard } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  public handleRequest: IAuthGuard['handleRequest'] = (err, user, info) => {
    if (!err && user) return user;

    if (info && typeof info === 'object' && 'message' in info) throw new UnauthorizedException(info.message);

    if (err && err instanceof Error) throw err;

    throw new UnauthorizedException('Failed to Sign In. Please, try again.');
  };
}
