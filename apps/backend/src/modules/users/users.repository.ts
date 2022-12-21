import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/modules/users/User';
import { MongoRepository } from 'src/shared/mongo/mongoRepository';

@Injectable()
export class UsersRepository extends MongoRepository<User, UserDocument> {
  constructor(@InjectModel(User.name) protected override model: Model<UserDocument>) {
    super(model);
  }
}
