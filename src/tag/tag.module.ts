import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from './tag.entity';

@Module({
  controllers: [TagController],
  imports: [TypeOrmModule.forFeature([Tag])]
})
export class TagModule {}
