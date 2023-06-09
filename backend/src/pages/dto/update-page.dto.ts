import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePageDto } from './create-page.dto';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdatePageDto extends PartialType(CreatePageDto) {
  @IsUUID()
  @IsNotEmpty()
  @ApiProperty()
  public id: string;
}
