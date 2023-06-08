import { ApiProperty } from '@nestjs/swagger';

export class JwtResponse {
  @ApiProperty()
  public access_token: string;
}
