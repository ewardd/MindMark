import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { IUserContext } from 'src/auth/types/RequestContext';
import { JwtResponse } from 'src/auth/dto/jwt-response.dto';
import { LocalAuthGuard } from 'src/auth/gurds/local-auth.guard';
import { Public } from 'src/auth/gurds/jwt-auth.guard';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';
import { UseUserContext } from 'src/utils/decorators/UseUserContext';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Controller('auth')
@UseInterceptors(ClassSerializerInterceptor)
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

  @Get('me')
  @ApiBearerAuth()
  @ApiOkResponse({ type: User })
  public async me(@UseUserContext() userCtx: IUserContext): Promise<User> {
    const user = await this._usersService.findOne(userCtx.id);

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
