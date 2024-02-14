import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}

export class Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

