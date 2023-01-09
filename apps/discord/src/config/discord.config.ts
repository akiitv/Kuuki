import { cleanEnv, str } from 'envalid';
import { Config, envType } from './config';
import { GatewayIntentBits } from 'discord.js';

class DiscordConfig extends Config {
  validateConfig(): envType {
    return cleanEnv(process.env, {
      DISCORD_TOKEN: str(),
    });
  }
}

const innerConfig = {
  intents: [GatewayIntentBits.Guilds],
};

export const discordConfig = {
  ...new DiscordConfig().validateConfig(),
  ...innerConfig,
} as any;
