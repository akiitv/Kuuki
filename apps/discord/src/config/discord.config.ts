import { cleanEnv, str } from 'envalid';
import { Config, envType } from './config';

class DiscordConfig extends Config {
  validateConfig(): envType {
    return cleanEnv(process.env, {
      DISCORD_TOKEN: str(),
    });
  }
}

export const discordConfig = new DiscordConfig().validateConfig();
