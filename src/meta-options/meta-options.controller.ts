import { Body, Controller, Param, Post } from '@nestjs/common';
import { CreatePostMetaOptionDto } from './dtos/crate-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOptions } from './meta-option.entity';
import { Repository } from 'typeorm';

@Controller('meta-options')
export class MetaOptionsController {
    
    constructor(
        private readonly metaOptionsService: MetaOptionsService,
    ){
    }
    
    @Post()
    create(@Body () createPostMetaOptionDto: CreatePostMetaOptionDto) {
        return this.metaOptionsService.createMetaOption(createPostMetaOptionDto)
    }
}
