import { Controller, Get, Put, Param, Body } from "@nestjs/common";
import { UserService } from './user.service';
import { IUser } from "./user.model";
import { UpdateUserDto } from "./dto/update-user.dto";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getAllUsers(): Promise<IUser[]> {
        return this.userService.getAllUsers();
    }

    // @Post()
    // async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    //   return this.userService.createUser(createUserDto);
    // }

    @Put(':id')
    async updateUser(
        @Param('id') id: string,
        @Body() updateUserDto: UpdateUserDto,
    ): Promise<IUser> {
        return this.userService.updateUser(id, updateUserDto);
    }
}