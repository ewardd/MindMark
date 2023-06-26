import { ApiProperty } from '@nestjs/swagger';
import { IOmitAbstractEntity } from 'src/utils/AbstractEntity';
import { IsNotEmpty, IsOptional, IsString, IsUUID, Length } from 'class-validator';
import { Page } from 'src/pages/entities/page.entity';

export class CreatePageDto
  implements Omit<Page, IOmitAbstractEntity | 'isCompleted' | 'author' | 'parent' | 'children' | 'key'>
{
  @IsNotEmpty()
  @IsString()
  @Length(4, 220)
  @ApiProperty()
  public title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  public content: string;

  @IsOptional()
  @IsUUID()
  @ApiProperty()
  public parent?: string;
}
