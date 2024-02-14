import { UsersService } from './users.service';
import { User } from './users.module';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): User[];
    findOne(id: string): User;
    create(user: User): void;
    update(id: string, user: User): void;
    delete(id: string): void;
}
