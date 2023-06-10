import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreatePageDto } from './create-page.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdatePageDto extends PartialType(CreatePageDto) {
  @IsOptional()
  public title?: string;

  @IsOptional()
  public content?: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  public isCompleted?: boolean;
}
