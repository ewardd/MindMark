import { AbstractEntity } from 'src/utils/AbstractEntity';
import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User extends AbstractEntity {
  @PrimaryColumn({ unique: true })
  @ApiProperty()
  public email: string;

  @Column({ default: true })
  @ApiProperty()
  public isActive: boolean;

  @Column({ select: false })
  @Exclude()
  public passwordHash: string;
}
