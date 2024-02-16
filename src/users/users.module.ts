import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './users.entity'; // Import your User entity

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Include User entity in TypeOrmModule.forFeature()
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
