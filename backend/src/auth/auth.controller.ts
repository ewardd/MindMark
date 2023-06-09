import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { Body, Controller, Post } from '@nestjs/common';
import { JwtResponse } from 'src/auth/dto/jwt-response.dto';
import { Public } from 'src/auth/auth.guard';
import { SignInDto } from 'src/auth/dto/sign-in.dto';
import { SignUpDto } from 'src/auth/dto/sign-up.dto';

@Controller('auth')
export class AuthController {
  public constructor(private readonly _authService: AuthService) {}

  @Public()
  @Post('sign-in')
  @ApiResponse({ type: JwtResponse })
  public signIn(@Body() signInDto: SignInDto): Promise<JwtResponse> {
    return this._authService.signIn(signInDto.email, signInDto.password);
  }

  @Public()
  @Post('sign-up')
  @ApiResponse({ type: JwtResponse })
  public signUp(@Body() signUpDto: SignUpDto): Promise<JwtResponse> {
    return this._authService.signUp(signUpDto);
  }
}
