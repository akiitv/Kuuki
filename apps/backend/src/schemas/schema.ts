import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export abstract class Model {
  @Prop()
  _id: string;
}