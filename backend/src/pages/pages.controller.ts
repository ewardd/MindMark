import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { IUserContext } from 'src/auth/types/RequestContext';
import { Page } from 'src/pages/entities/page.entity';
import { PagesService } from './pages.service';
import { TreePageDto } from 'src/pages/dto/tree-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { UseUserContext } from 'src/utils/decorators/UseUserContext';

@Controller('pages')
@ApiBearerAuth()
export class PagesController {
  public constructor(private readonly _pagesService: PagesService) {}

  @Post()
  @ApiOkResponse({ type: Page })
  public create(@Body() createPageDto: CreatePageDto, @UseUserContext() user: IUserContext): Promise<Page> {
    return this._pagesService.create(createPageDto, user.id);
  }

  @Get()
  @ApiOkResponse({ type: [TreePageDto] })
  public findAll(@UseUserContext() user: IUserContext): Promise<Page[]> {
    return this._pagesService.findAll(user.id);
  }

  @Get('/tree')
  @ApiOkResponse({ type: [TreePageDto] })
  public getTree(@UseUserContext() user: IUserContext): Promise<TreePageDto[]> {
    return this._pagesService.getTree(user.id);
  }

  @Get(':id')
  @ApiOkResponse({ type: Page })
  public findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Page> {
    return this._pagesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Page })
  public update(@Param('id', ParseUUIDPipe) id: string, @Body() updatePageDto: UpdatePageDto): Promise<Page> {
    return this._pagesService.update(id, updatePageDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Boolean })
  public remove(@Param('id', ParseUUIDPipe) id: string): Promise<boolean> {
    return this._pagesService.remove(id);
  }
}
