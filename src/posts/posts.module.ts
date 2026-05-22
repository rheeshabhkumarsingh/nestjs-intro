import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostService } from './providers/posts.service';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './post.entity';
// import { UsersModule } from './src/users/users.module';

@Module({
  controllers: [PostsController],
  providers: [PostService],
  imports: [UsersModule,
    TypeOrmModule.forFeature([Posts])
  ]
})
export class PostsModule {}
