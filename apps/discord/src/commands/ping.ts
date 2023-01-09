import { ApplicationCommandType } from 'discord.js';
import { ICommand } from './types/ICommand';

export const Ping: ICommand = {
  name: 'ping',
  description: 'Return a Pong',
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    const content = 'Pong!';

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
