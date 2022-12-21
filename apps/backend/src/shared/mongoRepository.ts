import { HydratedDocument, Model } from 'mongoose';

export abstract class MongoRepository<M, D extends HydratedDocument<M>> {
  constructor(protected model: Model<D>) {}

  async findAll(): Promise<M[]> {
    return this.model.find().exec();
  }
}
