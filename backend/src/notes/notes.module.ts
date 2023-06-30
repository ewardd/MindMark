import { Module } from '@nestjs/common';
import { Note } from 'src/notes/entities/note.entity';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesModule {}
