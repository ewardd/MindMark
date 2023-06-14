import { ApiProperty } from '@nestjs/swagger';

export class JwtResponse {
  @ApiProperty()
  public accessToken: string;

  @ApiProperty()
  public refreshToken: string;
}
