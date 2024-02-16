import { PostsService } from './posts.service';
import { Post as PostEntity } from './posts.entity';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    findAll(): Promise<PostEntity[]>;
    findById(id: number): Promise<PostEntity | undefined>;
    findByUserId(userId: number): Promise<PostEntity[]>;
    create(createPostDto: PostEntity): Promise<PostEntity>;
    update(id: number, updatePostDto: Partial<PostEntity>): Promise<PostEntity | undefined>;
    remove(id: number): Promise<void>;
}
