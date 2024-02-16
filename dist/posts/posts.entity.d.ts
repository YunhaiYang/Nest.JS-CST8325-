import { User } from '../users/users.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    userId: number;
    user: User;
}
