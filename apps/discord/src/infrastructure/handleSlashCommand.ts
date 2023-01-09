import { Client, CommandInteraction } from 'discord.js';
import { Command } from '../commands/Command';

export const handleSlashCommand = async (
  client: Client,
  commandResolver: Command[],
  interaction: CommandInteraction
) => {
  const slashCommand = commandResolver.find((command) => command.name === interaction.commandName);
  if (!slashCommand) {
    interaction.followUp({ content: 'An error has occured' });
    return;
  }

  await interaction.deferReply();
  slashCommand.run(client, interaction);
};
