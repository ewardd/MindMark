import { AuthGuard, IAuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable, SetMetadata, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  public constructor(private readonly reflector: Reflector) {
    super();
  }

  public canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }

  public handleRequest: IAuthGuard['handleRequest'] = (err, user, info) => {
    if (!err && user) return user;

    if (err && err instanceof Error) throw err;

    throw new UnauthorizedException(
      'Failed to verify token. Please, Sign In again.',
      info && typeof info === 'object' && 'message' in info ? info.message : undefined,
    );
  };
}
