import { IsArray, IsEnum, IsISO8601, IsNotEmpty, IsOptional, IsString, IsUrl, MinLength, ValidateNested } from "class-validator";
import { postType } from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";
import { CreatePostMetaOptionDto } from "../../meta-options/dtos/crate-post-meta-options.dto";
import { Type } from "class-transformer";

export class createPostDTO {
    @IsString()
    @IsNotEmpty()
    title!: string

    @IsEnum(postType)
    @IsNotEmpty()
    postType!: postType
    
    @IsString()
    @IsNotEmpty()
    slug!: string;

    @IsEnum(postStatus)
    @IsNotEmpty()
    status!: postStatus;
    
    @IsString()
    @IsOptional()
    content?: string;
    
    @IsString()
    @IsOptional()
    schema?: string;
    
    @IsUrl()
    @IsOptional()
    featureImageUrl?: string;
    
    @IsISO8601()
    @IsOptional()
    publishOn?: Date;
    
    @IsOptional()
    @IsString({each: true})
    @MinLength(3, {each: true})
    tags!: string[];

    @IsOptional()
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => CreatePostMetaOptionDto)
    metaOption!: CreatePostMetaOptionDto[];

}