import * as dotenv from 'dotenv';
dotenv.config();
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { discordConfig } from './config/discord.config';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (client) => {
  console.log(`Ready! Logged in as ${client.user.tag}`);
});

client.login(discordConfig.DISCORD_TOKEN);
