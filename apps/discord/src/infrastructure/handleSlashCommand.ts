import { Client, CommandInteraction } from 'discord.js';
import { ICommand } from '../commands/types/ICommand';

export const handleSlashCommand = async (
  client: Client,
  commandResolver: ICommand[],
  interaction: CommandInteraction
) => {
  const slashCommand = commandResolver.find(
    (command) => command.name === interaction.commandName
  );
  if (!slashCommand) {
    interaction.followUp({ content: 'An error has occured' });
    return;
  }

  slashCommand.run(client, interaction);
};
