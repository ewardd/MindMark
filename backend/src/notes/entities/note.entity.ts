import { AbstractEntity } from 'src/utils/AbstractEntity';
import { AfterLoad, Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { User } from 'src/users/entities/user.entity';

@Entity()
export class Note extends AbstractEntity {
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

  @ManyToOne(() => Note)
  @ApiPropertyOptional({ type: Note })
  public parent: Note;

  @OneToMany(() => Note, (note) => note.parent)
  @ApiProperty({ type: [Note] })
  public children: Note[];

  @AfterLoad()
  protected getKey() {
    this.key = this.id;
  }
}
