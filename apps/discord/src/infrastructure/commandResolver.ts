import { Ping, Register } from '../commands';
import { ICommand } from '../commands/types/ICommand';

export const commandResolver: ICommand[] = [Ping, Register];
