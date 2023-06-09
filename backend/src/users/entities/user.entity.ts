import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  public id: string;

  @Column()
  @ApiProperty()
  public email: string;

  @Column({ default: true })
  @ApiProperty()
  public isActive: boolean;

  @Column()
  @Exclude()
  public passwordHash: string;
}
