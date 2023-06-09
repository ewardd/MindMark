import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

export class SignInDto implements Partial<User> {
  @ApiProperty()
  public email: string;

  @ApiProperty()
  public password: string;
}
