import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './providers/posts.service';
import { ApiTags } from '@nestjs/swagger';
import { createPostDTO } from './dtos/create-post.dto';

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

    @Post()
    public createPost(@Body() createPostDto: createPostDTO) {
        return ''
    }
}
