import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDTO } from './dtos/create-users.dto';
import { UserService } from './providers/users.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(
        private readonly userService: UserService,
    ){}
    @Get('/:id{/:optional}')
    public getUsers(@Param() param) {
        return this.userService.findAll();
        // return 'You send a get request to user endpoint';
    }

    @Post()
    public createUser(@Body() createUserDTO:CreateUserDTO) {
        console.log(createUserDTO);
        return this.userService.createUser(createUserDTO);
    }
}
