import {
  ApplicationCommandType,
  ApplicationCommandOptionType,
} from 'discord.js';
import { EmptyUserValueError } from '../infrastructure/errors/EmptyUserValueError';
import { ICommand } from './types/ICommand';

export const Register: ICommand = {
  name: 'register',
  description: 'Register a new Kuuki account',
  type: ApplicationCommandType.ChatInput,
  options: [
    {
      name: 'username',
      description: 'Your desired visible username',
      type: ApplicationCommandOptionType.String,
      required: true,
    },
  ],
  run: async (client, interaction, { usersService }) => {
    const username = interaction.options.data[0].value;
    if (!username) throw new EmptyUserValueError('Username was not provided');

    const responseData = await usersService.createAccount(
      username as string,
      interaction.user.id
    );

    if (!responseData) {
      interaction.reply({
        ephemeral: true,
        content: `Sorry! There was an error on our side.`,
      });

      return;
    }

    interaction.reply({
      ephemeral: true,
      content: `You were successfully registered as ${responseData.username}!`,
    });
  },
};
