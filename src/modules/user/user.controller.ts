import { Controller, Get } from "@nestjs/common";
import { UserService } from './user.service';
import { User } from "./user.model";


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async getAllUsers(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    // @Post()
    // async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    //   return this.userService.createUser(createUserDto);
    // }

    // @Put(':id')
    // async updateUser(
    //   @Param('id') id: string,
    //   @Body() updateUserDto: UpdateUserDto,
    // ): Promise<User> {
    //   return this.userService.updateUser(id, updateUserDto);
    // }
}