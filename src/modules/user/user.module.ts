import { Module } from "@nestjs/common";
import { UserSchema } from "./user.model";
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from "./user.service";
import { UserController } from "./user.controller";


@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
    controllers: [UserController],
    providers: [UserService]
})

export class userModule { }