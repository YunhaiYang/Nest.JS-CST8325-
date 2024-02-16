import { UsersService } from './users.service';
import { User } from './users.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | undefined>;
    create(createUserDto: User): Promise<User>;
    update(id: number, updateUserDto: Partial<User>): Promise<User | undefined>;
    remove(id: number): Promise<void>;
}
