import {
  ChatInputApplicationCommandData,
  Client,
  CommandInteraction,
} from 'discord.js';
import { IServices } from '../../infrastructure/types/Services';

export interface ICommand extends ChatInputApplicationCommandData {
  run: (
    client: Client,
    interaction: CommandInteraction,
    services: IServices
  ) => void;
}
