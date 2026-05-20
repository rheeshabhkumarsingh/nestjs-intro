import { IsNotEmpty, IsString } from "class-validator";
import { postType } from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";

export class createPostDTO {
    @IsString()
    @IsNotEmpty()
    title!: string

    postType!: postType
    slug!: string;
    status!: postStatus;
    content?: string;
    schema?: string;
    featureImageUrl?: string;
    publishOn!: Date;
    tags!: string[];
    metaOption!: [{key:'', value: ''}]

}