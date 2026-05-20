import { Injectable } from "@nestjs/common";
import { UserService } from "../../users/providers/users.service";
// import { UserService } from "src/users/providers/users.service";

@Injectable()
export class PostService{
    constructor(
        private readonly userService: UserService
    ){}
    public findAll(userId: string){

        const user = this.userService.findOneById(userId)

        return [
            {
                user,
                title: 'test title',
                content: 'test content'
            },
            {
                user,
                title: 'test title 2',
                content: 'test content 2'
            }
        ]
    }
}