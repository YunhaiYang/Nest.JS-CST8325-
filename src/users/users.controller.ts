// users.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<User | undefined> {
        return this.usersService.findById(id);
    }

    @Post()
    async create(@Body() createUserDto: User): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateUserDto: Partial<User>): Promise<User | undefined> {
        return this.usersService.update(id, updateUserDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
        return this.usersService.remove(id);
    }
}
