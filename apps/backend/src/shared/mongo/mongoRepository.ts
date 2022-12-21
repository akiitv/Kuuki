import { HydratedDocument, Model } from 'mongoose';
import { Model as SchemaModel } from 'src/shared/mongo/schema';

export abstract class MongoRepository<M extends SchemaModel, D extends HydratedDocument<M>> {
  constructor(protected model: Model<D>) {}

  async findAll(): Promise<M[]> {
    return this.model.find().exec();
  }

  async findById(objectId: string): Promise<M | null> {
    return this.model.findById(objectId);
  }

  async create(object: Omit<M, '_id'>): Promise<M> {
    const createdObject = await new this.model(object).save();
    return createdObject;
  }
}
