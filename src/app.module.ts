import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { userModule } from './modules/user/user.module';
import { DatabaseService } from './utils/database.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    userModule
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule { }
