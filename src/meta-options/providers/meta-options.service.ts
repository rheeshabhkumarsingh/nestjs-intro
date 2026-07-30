import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionDto } from '../dtos/crate-post-meta-options.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOptions } from '../meta-option.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MetaOptionsService {
    constructor(
        @InjectRepository(MetaOptions)
                private readonly metaOptionRepository: Repository<MetaOptions>,
    ) {}

    async createMetaOption(createPostMetaOptionDto: CreatePostMetaOptionDto) {
        let metaOption = this.metaOptionRepository.create(createPostMetaOptionDto);
        return await this.metaOptionRepository.save(metaOption)
    }
}
