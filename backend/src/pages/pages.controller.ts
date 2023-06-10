import { ApiBearerAuth, ApiOkResponse } from '@nestjs/swagger';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { CreatePageDto } from './dto/create-page.dto';
import { Page } from 'src/pages/entities/page.entity';
import { PagesService } from './pages.service';
import { Paginate, PaginateQuery } from 'nestjs-paginate';
import { PaginateQueryOptions } from 'src/utils/decorators/PaginateQueryOptions';
import { UpdatePageDto } from './dto/update-page.dto';

@Controller('pages')
@ApiBearerAuth()
@UseInterceptors(ClassSerializerInterceptor)
export class PagesController {
  public constructor(private readonly _pagesService: PagesService) {}

  @Post()
  public create(@Body() createPageDto: CreatePageDto) {
    return this._pagesService.create(createPageDto);
  }

  @Get()
  @PaginateQueryOptions(Page)
  public findAll(@Paginate() query: PaginateQuery) {
    return this._pagesService.findAll(query);
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
