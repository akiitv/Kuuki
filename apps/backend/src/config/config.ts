import { CleanedEnvAccessors } from 'envalid';

export type envType = Readonly<Record<string, any> & CleanedEnvAccessors>;

export abstract class Config {
  abstract validateConfig(): envType;
}
