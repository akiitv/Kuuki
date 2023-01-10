import { CreateUserDTO } from 'dto';
import { IUsersRepository } from './usersRepository';

export interface IUsersService {
  createAccount(username: string, discordId: string): Promise<CreateUserDTO | void>;
}

export const UsersService = (
  usersRepository: IUsersRepository
): IUsersService => ({
  createAccount: async (username, discordId): Promise<CreateUserDTO | void> =>
    usersRepository.addUser(username, discordId),
});
