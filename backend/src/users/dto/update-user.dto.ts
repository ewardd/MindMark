import { ApiPropertyOptional } from '@nestjs/swagger';
import { IOmitAbstractEntity } from 'src/utils/AbstractEntity';
import { IsBoolean, IsEmail, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';

export class UpdateUserDto implements Partial<Omit<User, IOmitAbstractEntity | 'passwordHash'>> {
  @IsEmail()
  @ApiPropertyOptional()
  public email?: string;

  @IsBoolean()
  @ApiPropertyOptional()
  public isActive?: boolean;

  @IsString()
  @ApiPropertyOptional()
  public password?: string;
}
