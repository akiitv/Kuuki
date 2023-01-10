import axios from 'axios';
import { CreateUserDTO } from 'dto';
import { backendConfig } from '../../config/backend.config';

export interface IUsersRepository {
  addUser(username: string, discordId: string): Promise<CreateUserDTO | void>;
}

const axiosInstance = axios.create({
  baseURL: backendConfig.BACKEND_URL,
});

export const UsersRepository = (): IUsersRepository => ({
  addUser: async (username, discordId): Promise<CreateUserDTO | void> => {
    try {
      const response = await axiosInstance.post('/user', {
        username,
        discordId,
      });

      return response.data as CreateUserDTO;
    } catch (error: unknown) {
      console.error(error);
    }
  },
});
