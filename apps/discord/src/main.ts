import * as dotenv from 'dotenv';
dotenv.config();
import { Client, Events, Interaction } from 'discord.js';
import { discordConfig } from './config/discord.config';
import { commandResolver } from './infrastructure/commandResolver';
import { handleSlashCommand } from './infrastructure/handleSlashCommand';
import { UsersService } from './modules/users/usersService';
import { UsersRepository } from './modules/users/usersRepository';

const client = new Client({
  intents: discordConfig.intents,
});

client.once(Events.ClientReady, async (client) => {
  await client.application.commands.set(commandResolver);

  console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  if (interaction.isCommand() || interaction.isContextMenuCommand()) {
    await handleSlashCommand(client, commandResolver, interaction, {
      usersService: UsersService(UsersRepository()),
    });
  }
});

client.login(discordConfig.DISCORD_TOKEN);
