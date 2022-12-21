import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/CreateUserDTO';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.userService.createUser(createUserDTO);
  }
}
