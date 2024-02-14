import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}

export class User {
  id: string;
  username: string;
  email: string;
}

