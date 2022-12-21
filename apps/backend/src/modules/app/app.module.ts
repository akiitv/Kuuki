import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { mongoConfig } from 'src/config/mongo.config';
import { LoggerMiddleware } from 'src/middleware/logger.middleware';
import { UserModule } from '../user/user.module';
import { UsersModule } from '../users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MongooseModule.forRoot(mongoConfig.MONGO_URI as string, {
      dbName: 'kuuki',
      user: mongoConfig.MONGO_USER,
      pass: mongoConfig.MONGO_PASSWORD,
    }),
    UsersModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
