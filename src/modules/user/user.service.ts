import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { User } from "./user.model";
import { Model } from "mongoose";


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

    async getAllUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec()
        console.log(users);

        return await this.userModel.find().exec();
    }

    // async createUser(createUserDto: CreateUserDto): Promise<User> {
    //     const createdUser = new this.userModel(createUserDto);
    //     return createdUser.save();
    //   }

}