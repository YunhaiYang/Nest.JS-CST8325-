import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './posts.entity'; // Import your Post entity

@Module({
  imports: [TypeOrmModule.forFeature([Post])], // Include Post entity in TypeOrmModule.forFeature()
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
