import { AbstractEntity } from 'src/utils/AbstractEntity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Page extends AbstractEntity {
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
}
