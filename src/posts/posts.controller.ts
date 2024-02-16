import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as PostEntity  } from './posts.entity';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Get()
    async findAll(): Promise<PostEntity[]> {
        return this.postsService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<PostEntity | undefined> {
        return this.postsService.findById(id);
    }

    @Get('user/:userId') // New endpoint to get posts by userId
    async findByUserId(@Param('userId') userId: number): Promise<PostEntity[]> {
        return this.postsService.findByUserId(userId);
    }

    @Post()
    async create(@Body() createPostDto: PostEntity): Promise<PostEntity> {
        return this.postsService.create(createPostDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updatePostDto: Partial<PostEntity>): Promise<PostEntity | undefined> {
        return this.postsService.update(id, updatePostDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.postsService.remove(id);
    }
}
