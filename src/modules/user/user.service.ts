import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from "./user.model";
import { Model } from "mongoose";
import { UpdateUserDto } from "./dto/update-user.dto";


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }

    async getAllUsers(): Promise<IUser[]> {
        const users = await this.userModel.find().exec()
        console.log(users);

        return await this.userModel.find().exec();
    }

    // async createUser(createUserDto: CreateUserDto): Promise<IUser> {
    //     const createdUser = new this.userModel(createUserDto);
    //     return createdUser.save();
    //   }

    async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<IUser> {
        const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });

        if (!user) {
            throw new NotFoundException('User not found')
        }
        return user;
    }

}