import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Posts } from './posts/post.entity';
import { TagModule } from './tag/tag.module';

@Module({
  imports: [UsersModule, PostsModule, AuthModule, 
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        entities: [
          User,
          Posts
        ],
        synchronize: true,
        port: 5432,
        host: 'localhost',
        username: 'postgres',
        password: 'root',
        database: 'nestjs-blog'
      })
    }), TagModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
