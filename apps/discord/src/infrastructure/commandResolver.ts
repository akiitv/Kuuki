import { ICommand } from '../commands/types/ICommand';
import { Ping } from '../commands/ping';

export const commandResolver: ICommand[] = [Ping];
