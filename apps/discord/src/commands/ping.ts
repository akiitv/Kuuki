import { ApplicationCommandType } from 'discord.js';
import { Command } from './Command';

export const Ping: Command = {
  name: 'ping',
  description: 'Return a Pong',
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    const content = 'Pong';

    await interaction.followUp({
      ephemeral: true,
      content,
    });
  },
};
