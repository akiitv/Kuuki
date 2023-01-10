import { CreateUserDTO as CUDTO } from 'dto';
import { IsString } from 'class-validator';

export class CreateUserDTO implements CUDTO {
  @IsString()
  username: string;

  @IsString()
  discordId: string;
}
