import { cleanEnv, str } from 'envalid';
import { Config, envType } from './config';

class BackendConfig extends Config {
  validateConfig(): envType {
    return cleanEnv(process.env, {
      BACKEND_URL: str(),
    });
  }
}

export const backendConfig = new BackendConfig().validateConfig();
