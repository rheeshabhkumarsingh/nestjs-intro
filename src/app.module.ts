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
import { Tag } from './tag/tag.entity';
import { MetaOptionsModule } from './meta-options/meta-options.module';

@Module({
  imports: [UsersModule, PostsModule, AuthModule, TagModule, MetaOptionsModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        entities: [
          User,
          Posts,
          Tag
        ],
        synchronize: true,
        port: 5432,
        host: 'localhost',
        username: 'postgres',
        password: 'root',
        database: 'nestjs-blog'
      })
    }), TagModule, MetaOptionsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
