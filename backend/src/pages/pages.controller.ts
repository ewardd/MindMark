import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { IUserContext } from 'src/auth/types/RequestContext';
import { Page } from 'src/pages/entities/page.entity';
import { PagesService } from './pages.service';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { PaginateQueryOptions } from 'src/utils/decorators/PaginateQueryOptions';
import { UpdatePageDto } from './dto/update-page.dto';
import { UseUserContext } from 'src/utils/decorators/UseUserContext';

@Controller('pages')
@ApiBearerAuth()
export class PagesController {
  public constructor(private readonly _pagesService: PagesService) {}

  @Post()
  public create(@Body() createPageDto: CreatePageDto, @UseUserContext() user: IUserContext): Promise<Page> {
    return this._pagesService.create(createPageDto, user.id);
  }

  @Get()
  @PaginateQueryOptions(Page)
  public findAll(@Paginate() query: PaginateQuery, @UseUserContext() user: IUserContext): Promise<Paginated<Page>> {
    return this._pagesService.findAll(query, user.id);
  }

  @Get(':id')
  @ApiOkResponse({ type: Page })
  public findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this._pagesService.findOne(id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Page })
  public update(@Param('id', ParseUUIDPipe) id: string, @Body() updatePageDto: UpdatePageDto) {
    return this._pagesService.update(id, updatePageDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: Boolean })
  public remove(@Param('id', ParseUUIDPipe) id: string) {
    return this._pagesService.remove(id);
  }
}
