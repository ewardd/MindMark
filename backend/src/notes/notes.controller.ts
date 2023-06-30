import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { IUserContext } from 'src/auth/types/RequestContext';
import { Note } from 'src/notes/entities/note.entity';
import { NotesService } from './notes.service';
import { TreeNoteDto } from 'src/notes/dto/tree-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { UseUserContext } from 'src/utils/decorators/UseUserContext';

@Controller('notes')
@ApiBearerAuth()
export class NotesController {
  public constructor(private readonly _noteService: NotesService) {}

  @Post()
  @ApiOkResponse({ type: Note })
  public create(@Body() createNoteDto: CreateNoteDto, @UseUserContext() user: IUserContext): Promise<Note> {
    return this._noteService.create(createNoteDto, user.id);
  }

  @Get()
  @ApiOkResponse({ type: [TreeNoteDto] })
  public findAll(@UseUserContext() user: IUserContext): Promise<Note[]> {
    return this._noteService.findAll(user.id);
  }

  @Get('/tree')
  @ApiOkResponse({ type: [TreeNoteDto] })
  public getTree(@UseUserContext() user: IUserContext): Promise<TreeNoteDto[]> {
    return this._noteService.getTree(user.id);
  }

  @Get(':id')
  @ApiOkResponse({ type: Note })
  public findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Note> {
    return this._noteService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Note })
  public update(@Param('id', ParseUUIDPipe) id: string, @Body() updateNoteDto: UpdateNoteDto): Promise<Note> {
    return this._noteService.update(id, updateNoteDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Boolean })
  public remove(@Param('id', ParseUUIDPipe) id: string): Promise<boolean> {
    return this._noteService.remove(id);
  }
}
