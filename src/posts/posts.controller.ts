import { Controller, Get } from '@nestjs/common';
import { PostService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('Posts')
export class PostsController {
    constructor(
        private readonly postService: PostService
    ){}

    @Get()
    public getPosts(){
        return this.postService.findAll('1');
    }
}
