import { ApiPropertyOptional, PartialType, OmitType } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class UpdateUserDto extends PartialType(OmitType(User, ['passwordHash'])) {
  @ApiPropertyOptional()
  public password?: string;
}
