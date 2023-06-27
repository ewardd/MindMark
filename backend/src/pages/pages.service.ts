import { CreatePageDto } from './dto/create-page.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { IsNull, Repository } from 'typeorm';
import { Page } from 'src/pages/entities/page.entity';
import { PageDto } from 'src/pages/dto/page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PagesService {
  public constructor(
    @InjectRepository(Page)
    private readonly _pageRepository: Repository<Page>,
  ) {}

  public create = async ({ title, content, parent }: CreatePageDto, userId: User['id']): Promise<Page> => {
    const page = this._pageRepository.create({
      author: { id: userId },
      title,
      content,
      parent: { id: parent },
    });

    const { id } = await this._pageRepository.save(page);
    return this.findOne(id);
  };

  public findAll = (userId: User['id']): Promise<Page[]> =>
    this._pageRepository.find({ where: { author: { id: userId } } });

  public getList = async (userId: User['id']): Promise<PageDto[]> => {
    const pages = await this._pageRepository.find({
      where: { author: { id: userId }, parent: IsNull() },
      select: ['id', 'title', 'author', 'createdAt', 'updatedAt', 'children'],
      relations: ['children'],
    });

    return pages;
  };

  public findOne = async (id: string): Promise<Page> => {
    const page = await this._pageRepository.findOne({ where: { id } });
    if (!page?.id) throw new NotFoundException();

    return page;
  };

  public update = async (id: string, { title, content, isCompleted }: UpdatePageDto): Promise<Page> => {
    const page = await this.findOne(id);
    if (!page?.id) throw new NotFoundException();

    Object.assign(page, { title, content, isCompleted });

    await this._pageRepository.save(page);
    return await this.findOne(id);
  };

  public remove = async (id: string): Promise<boolean> => !!(await this._pageRepository.softDelete(id)).affected;
}
