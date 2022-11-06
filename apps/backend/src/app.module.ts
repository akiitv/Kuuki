import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { mongoConfig } from './config/mongo.config';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.MONGO_URI as string, {
      dbName: 'kuuki',
      user: mongoConfig.MONGO_USER,
      pass: mongoConfig.MONGO_PASSWORD,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
