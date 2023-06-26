import { ApiProperty, PickType } from '@nestjs/swagger';
import { Page } from 'src/pages/entities/page.entity';

export class PageDto extends PickType(Page, ['id', 'key', 'title', 'author', 'createdAt', 'updatedAt']) {
  @ApiProperty({ type: [PageDto] })
  public children: PageDto[];
}
