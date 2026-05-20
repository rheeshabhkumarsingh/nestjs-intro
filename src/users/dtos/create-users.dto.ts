import { IsEmail, isEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateUserDTO {
    @IsString()
    @IsNotEmpty()
    firstName!: string;

    @IsString()
    @IsOptional()
    lastName!: string;

    @IsEmail()
    email!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;
}