import { User } from './users.module';
export declare class UsersService {
    private readonly users;
    findAll(): User[];
    findOne(id: string): User;
    create(user: User): void;
    update(id: string, user: User): void;
    delete(id: string): void;
}
