import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateNoteDto } from './create-note.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {
  @IsOptional()
  public title?: string;

  @IsOptional()
  public content?: string;

  @ApiPropertyOptional()
  @IsBoolean()
  @IsOptional()
  public isCompleted?: boolean;
}
