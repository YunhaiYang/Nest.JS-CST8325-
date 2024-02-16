import { Repository } from 'typeorm';
import { User } from './users.entity';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findById(id: number): Promise<User | undefined>;
    create(user: User): Promise<User>;
    update(id: number, updateUserDto: Partial<User>): Promise<User | undefined>;
    remove(id: number): Promise<void>;
}
