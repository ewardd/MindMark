import { CreatePageDto } from './dto/create-page.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Page } from 'src/pages/entities/page.entity';
import { PaginateQuery, Paginated, paginate } from 'nestjs-paginate';
import { Repository } from 'typeorm';
import { UpdatePageDto } from './dto/update-page.dto';

@Injectable()
export class PagesService {
  public constructor(
    @InjectRepository(Page)
    private readonly _pageRepository: Repository<Page>,
  ) {}

  public create(createPageDto: CreatePageDto): Promise<Page> {
    return this._pageRepository.save(createPageDto);
  }

  public findAll = (query: PaginateQuery): Promise<Paginated<Page>> =>
    paginate(query, this._pageRepository, {
      sortableColumns: ['id', 'author.email', 'title'],
      nullSort: 'last',
      defaultSortBy: [['createdAt', 'DESC']],
      searchableColumns: ['title', 'content', 'author.email'],
      relations: ['author'],
    });

  public findOne = (id: string): Promise<Page | null> => {
    return this._pageRepository.findOneBy({ id });
  };

  public update = async (id: string, updatePageDto: UpdatePageDto): Promise<Page> => {
    const page = await this.findOne(id);
    if (!page?.id) throw new NotFoundException();

    Object.assign(page, updatePageDto);

    return this._pageRepository.save(page);
  };

  public remove = async (id: string): Promise<boolean> => !!(await this._pageRepository.softDelete(id)).affected;
}