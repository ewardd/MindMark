import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';

export type IOmitAbstractEntity = 'id' | 'createdAt' | 'updatedAt' | 'deletedAt';

export abstract class AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  public id: string;

  @CreateDateColumn()
  @ApiProperty()
  public createdAt: Date;

  @UpdateDateColumn()
  @ApiProperty()
  public updatedAt: Date;

  @DeleteDateColumn({ select: false })
  @Exclude()
  public deletedAt?: Date | null;
}
