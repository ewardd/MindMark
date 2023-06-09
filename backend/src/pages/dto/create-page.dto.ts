import { ApiProperty } from '@nestjs/swagger';
import { IOmitAbstractEntity } from 'src/utils/AbstractEntity';
import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';
import { Page } from 'src/pages/entities/page.entity';
import { User } from 'src/users/entities/user.entity';

export class CreatePageDto implements Omit<Page, IOmitAbstractEntity | 'isCompleted'> {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  public author: User;

  @IsString()
  @IsNotEmpty()
  @Length(8, 220)
  @ApiProperty()
  public title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  public content: string;
}
