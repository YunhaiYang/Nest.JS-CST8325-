import { Repository } from 'typeorm';
import { Post } from './posts.entity';
export declare class PostsService {
    private readonly postsRepository;
    constructor(postsRepository: Repository<Post>);
    findAll(): Promise<Post[]>;
    findById(id: number): Promise<Post | undefined>;
    create(post: Post): Promise<Post>;
    findByUserId(userId: number): Promise<Post[]>;
    update(id: number, updatePostDto: Partial<Post>): Promise<Post | undefined>;
    remove(id: number): Promise<void>;
}
