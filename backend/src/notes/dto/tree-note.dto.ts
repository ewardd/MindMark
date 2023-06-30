import { ApiProperty, PickType } from '@nestjs/swagger';
import { Note } from 'src/notes/entities/note.entity';

export class TreeNoteDto extends PickType(Note, ['id', 'key', 'title']) {
  @ApiProperty({ type: [TreeNoteDto] })
  public children: TreeNoteDto[];
}
