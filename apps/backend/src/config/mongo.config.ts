import { cleanEnv, str } from 'envalid';
import { Config, envType } from './config';

class MongoConfig extends Config {
  validateConfig(): envType {
    return cleanEnv(process.env, {
      MONGO_URI: str(),
      MONGO_USER: str(),
      MONGO_PASSWORD: str(),
    });
  }
}

export const mongoConfig = new MongoConfig().validateConfig();
