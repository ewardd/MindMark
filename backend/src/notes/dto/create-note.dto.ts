import { ApiProperty } from '@nestjs/swagger';
import { IOmitAbstractEntity } from 'src/utils/AbstractEntity';
import { IsNotEmpty, IsOptional, IsString, IsUUID, Length } from 'class-validator';
import { Note } from 'src/notes/entities/note.entity';

export class CreateNoteDto
  implements Omit<Note, IOmitAbstractEntity | 'isCompleted' | 'author' | 'parent' | 'children' | 'key'>
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
