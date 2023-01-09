import { cleanEnv, str } from 'envalid';
import { Config, envType } from './config';

class AppConfig extends Config {
  validateConfig(): envType {
    return cleanEnv(process.env, {
      PORT: str(),
    });
  }
}

export const appConfig = new AppConfig().validateConfig();
