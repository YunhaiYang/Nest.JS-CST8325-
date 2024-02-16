import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './posts.entity';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post)
        private readonly postsRepository: Repository<Post>,
    ) {}

    async findAll(): Promise<Post[]> {
        return this.postsRepository.find();
    }

    async findById(id: number): Promise<Post | undefined> {
        return this.postsRepository.findOne({ where: { id } });
    }    
    
    async create(post: Post): Promise<Post> {
        return this.postsRepository.save(post);
    }

    async findByUserId(userId: number): Promise<Post[]> {
        return this.postsRepository.find({ where: { userId } });
    }

    async update(id: number, updatePostDto: Partial<Post>): Promise<Post | undefined> {
        const post = await this.findById(id);
        if (!post) {
            return undefined;
        }
        Object.assign(post, updatePostDto);
        return this.postsRepository.save(post);
    }

    async remove(id: number): Promise<void> {
        await this.postsRepository.delete(id);
    }
}
