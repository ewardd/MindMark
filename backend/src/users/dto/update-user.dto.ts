import { ApiPropertyOptional, OmitType, PartialType } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

export class UpdateUserDto extends PartialType(OmitType(User, ['passwordHash'])) {
  @ApiPropertyOptional()
  public password?: string;
}
