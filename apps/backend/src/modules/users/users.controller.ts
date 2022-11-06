import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getOne(): string {
    return 'Get one user';
  }
}
