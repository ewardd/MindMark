import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { IUserContext } from 'src/auth/types/RequestContext';
import { Page } from 'src/pages/entities/page.entity';
import { PageDto } from 'src/pages/dto/page.dto';
import { PagesService } from './pages.service';
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
  @ApiOkResponse({ type: [PageDto] })
  public getList(@UseUserContext() user: IUserContext): Promise<PageDto[]> {
    return this._pagesService.getList(user.id);
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
