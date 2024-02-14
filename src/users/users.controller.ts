import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.module';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    findAll(): User[] {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): User {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() user: User) {
        this.usersService.create(user);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() user: User) {
        this.usersService.update(id, user);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        this.usersService.delete(id);
    }
}
