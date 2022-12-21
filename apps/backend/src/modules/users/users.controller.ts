import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/modules/users/User';
import { CreateUserDTO } from './dto/CreateUserDTO';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.usersService.findAll();
  }
}

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.usersService.createUser(createUserDTO);
  }
}
