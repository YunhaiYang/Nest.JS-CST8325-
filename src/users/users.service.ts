import { Injectable } from '@nestjs/common';
import { User } from './users.module';

@Injectable()
export class UsersService {
    private readonly users: User[] = [];

    findAll(): User[] {
        return this.users;
    }

    findOne(id: string): User {
        return this.users.find(user => user.id === id);
    }

    create(user: User) {
        this.users.push(user);
    }

    update(id: string, user: User) {
        const index = this.users.findIndex(existingUser => existingUser.id === id);
        if (index !== -1) {
            this.users[index] = user;
        }
    }

    delete(id: string) {
        const index = this.users.findIndex(existingUser => existingUser.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
        }
    }
}
