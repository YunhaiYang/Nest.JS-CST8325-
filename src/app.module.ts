import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { PostsController } from './posts/posts.controller';
import { PostsService } from './posts/posts.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

import { User } from './users/users.entity';
import { Post } from './posts/posts.entity';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306, // Default MySQL port
            username: 'root',
            password: 'root',
            database: 'social_media',
            entities: [User,Post], // Add your entity classes here
            synchronize: true, // Auto-create database schema (in development, be careful in production)
        } as TypeOrmModuleOptions),
        TypeOrmModule.forFeature([User, Post]),
    ],
    controllers: [UsersController, PostsController],
    providers: [UsersService, PostsService],
})
export class AppModule {}
