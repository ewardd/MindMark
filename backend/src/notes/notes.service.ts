import { CreateNoteDto } from './dto/create-note.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IsNull, Repository } from 'typeorm';
import { Note } from 'src/notes/entities/note.entity';
import { TreeNoteDto } from 'src/notes/dto/tree-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class NotesService {
  public constructor(
    @InjectRepository(Note)
    private readonly _noteRepository: Repository<Note>,
  ) {}

  public create = async ({ title, content, parent }: CreateNoteDto, userId: User['id']): Promise<Note> => {
    const note = this._noteRepository.create({
      author: { id: userId },
      title,
      content,
      parent: { id: parent },
    });

    const { id } = await this._noteRepository.save(note);
    return this.findOne(id);
  };

  public findAll = (userId: User['id']): Promise<Note[]> =>
    this._noteRepository.find({ where: { author: { id: userId } } });

  public getTree = async (userId: User['id']): Promise<TreeNoteDto[]> => {
    const notes = await this._noteRepository.find({
      where: { author: { id: userId }, parent: IsNull() },
      select: ['id', 'title', 'children'],
      relations: ['children'],
      loadEagerRelations: false,
    });

    return notes;
  };

  public findOne = async (id: string): Promise<Note> => {
    const note = await this._noteRepository.findOne({ where: { id } });
    if (!note?.id) throw new NotFoundException();

    return note;
  };

  public update = async (id: string, { title, content, isCompleted }: UpdateNoteDto): Promise<Note> => {
    const note = await this.findOne(id);
    if (!note?.id) throw new NotFoundException();

    Object.assign(note, { title, content, isCompleted });

    await this._noteRepository.save(note);
    return await this.findOne(id);
  };

  public remove = async (id: string): Promise<boolean> => !!(await this._noteRepository.softDelete(id)).affected;
}
