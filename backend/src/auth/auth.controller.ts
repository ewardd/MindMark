import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { Body, Controller, Get, Post, UnauthorizedException, UseGuards } from '@nestjs/common';
import { IUserContext, IUserRefreshContext } from 'src/auth/types/RequestContext';
import { JwtResponse } from 'src/auth/dto/jwt-response.dto';
import { LocalAuthGuard } from 'src/auth/guards/local-auth.guard';
import { Public } from 'src/auth/guards/jwt-auth.guard';
import { RefreshTokenGuard } from 'src/auth/guards/refreshToken.guard';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { UseUserContext } from 'src/utils/decorators/UseUserContext';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
export class AuthController {
  public constructor(private readonly _authService: AuthService, private readonly _usersService: UsersService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @Public()
  @ApiOkResponse({ type: JwtResponse })
  public login(@Body() _: SignInDto, @UseUserContext() user: IUserContext): Promise<JwtResponse> {
    return this._authService.login(user);
  }

  @Post('register')
  @Public()
  @ApiOkResponse({ type: JwtResponse })
  public signUp(@Body() signUpDto: SignUpDto): Promise<JwtResponse> {
    return this._authService.registerUser(signUpDto);
  }

  @Get('refresh')
  @UseGuards(RefreshTokenGuard)
  @Public()
  @ApiBearerAuth()
  @ApiOkResponse({ type: JwtResponse })
  public refresh(@UseUserContext() user: IUserRefreshContext) {
    // TODO: Add redis to keep hashed tokens and invalidate 'em
    return this._authService.login(user);
  }

  @Get('me')
  @ApiBearerAuth()
  @ApiOkResponse({ type: User })
  public async me(@UseUserContext() userCtx: IUserContext): Promise<User> {
    const user = await this._usersService.findOne(userCtx.id);

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
