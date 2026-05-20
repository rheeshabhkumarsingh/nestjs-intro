import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDTO } from "../dtos/create-users.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) {}

    public async createUser(createUserDto: CreateUserDTO) {
        // check is user exists with same email
        const existingUser = await this.userRepository.findOne({
            where: { email: createUserDto.email}
        })

        //handle exception
        //create new user
        let newUser = this.userRepository.create(createUserDto);
        newUser = await this.userRepository.save(newUser)
    }

    public findAll() {
        return[
            {
                firstName: 'Pragati',
                lastName: 'Raj'
            },
            {
                firstName: 'Rheeshabh',
                lastName: 'Singh'
            }
        ]
    }
    public findOneById(id:string) {
        return {
            id:123,
            firstName: 'Pragati',
            lastName: 'Raj'
        }
    }
}