import { AbstractEntity } from 'src/utils/AbstractEntity';
import { AfterLoad, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Page extends AbstractEntity {
  @ApiProperty()
  public key: string;

  @ManyToOne(() => User, { eager: true })
  @ApiProperty()
  public author: User;

  @Column()
  @ApiProperty()
  public title: string;

  @Column()
  @ApiProperty()
  public content: string;

  @Column({ default: false })
  @ApiProperty()
  public isCompleted: boolean;

  @ManyToOne(() => Page)
  @ApiPropertyOptional({ type: Page })
  public parent: Page;

  @OneToMany(() => Page, (page) => page.parent)
  @ApiProperty({ type: [Page] })
  public children: Page[];

  @AfterLoad()
  protected getKey() {
    this.key = this.id;
  }
}
