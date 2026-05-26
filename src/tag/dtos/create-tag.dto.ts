import { ApiProperty } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl } from "class-validator";

export class CreateTagDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    slug:string;

    @IsOptional()
    @IsString()
    description?: string;
    
    @IsOptional()
    @IsJSON()
    schema?: string;
    
    @IsOptional()
    @IsUrl()
    fraturedImageUrl?: string;

}