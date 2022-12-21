import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Model } from '../../shared/mongo/schema';

@Schema()
export class User extends Model {
  @Prop()
  discordId: string;

  @Prop()
  name: string;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
