import { Injectable } from '@nestjs/common';
import { UsersRepository } from 'src/modules/users/users.repository';
import { CreateUserDTO } from './dto/CreateUserDTO';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<void> {
    console.log(createUserDTO);
  }
}
