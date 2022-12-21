import { Injectable } from "@nestjs/common";
import { User } from "src/modules/users/User";
import { CreateUserDTO } from "./dto/CreateUserDTO";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async findAll(): Promise<User[]> {
    return this.usersRepository.findAll();
  }

  async createUser(createUserDTO: CreateUserDTO): Promise<CreateUserDTO> {
    return await this.usersRepository.create(createUserDTO);
  }
}