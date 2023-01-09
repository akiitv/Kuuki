import * as dotenv from 'dotenv';
dotenv.config();
import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
  Interaction,
} from 'discord.js';
import { discordConfig } from './config/discord.config';
import { CommandResolver } from './commands/CommandResolver';
import { handleSlashCommand } from './infrastructure/handleSlashCommand';

const client = new Client({
  intents: [GatewayIntentBits.Guilds],
}) as Client<boolean> & { commands: Collection<unknown, unknown> };

client.once(Events.ClientReady, async (client) => {
  await client.application.commands.set(CommandResolver);

  console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  if (interaction.isCommand() || interaction.isContextMenuCommand()) {
    await handleSlashCommand(client, CommandResolver, interaction);
  }
});

client.login(discordConfig.DISCORD_TOKEN);
