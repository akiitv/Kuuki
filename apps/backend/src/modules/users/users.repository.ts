import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';
import { MongoRepository } from 'src/shared/mongoRepository';

@Injectable()
export class UsersRepository extends MongoRepository<User, UserDocument> {
  constructor(@InjectModel(User.name) protected override model: Model<UserDocument>) {
    super(model);
  }
}
