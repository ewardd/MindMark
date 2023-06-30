import { ApiProperty, PickType } from '@nestjs/swagger';
import { Page } from 'src/pages/entities/page.entity';

export class TreePageDto extends PickType(Page, ['id', 'key', 'title']) {
  @ApiProperty({ type: [TreePageDto] })
  public children: TreePageDto[];
}
