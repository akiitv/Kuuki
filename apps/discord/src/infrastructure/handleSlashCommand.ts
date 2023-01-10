import { Client, CommandInteraction } from 'discord.js';
import { ICommand } from '../commands/types/ICommand';
import { IServices } from './types/Services';

export const handleSlashCommand = async (
  client: Client,
  commandResolver: ICommand[],
  interaction: CommandInteraction,
  services: IServices
) => {
  const slashCommand = commandResolver.find(
    (command) => command.name === interaction.commandName
  );
  if (!slashCommand) {
    interaction.followUp({ content: 'An error has occured' });
    return;
  }

  slashCommand.run(client, interaction, services);
};
