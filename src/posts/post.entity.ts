import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Posts {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false
    })
    title!: string

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false
    })
    postType!: string
    
    @Column({
        type: 'varchar',
        length: 96,
        nullable: false
    })
    slug!: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false
    })
    status!: string;
    
    @Column({
        type: 'varchar',
        length: 96,
        nullable: true
    })
    content?: string;
    
    @Column({
        type: 'varchar',
        length: 96,
        nullable: true
    })
    schema?: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: true
    })
    featureImageUrl?: string;
    
    @Column({
        type: 'varchar',
        length: 96,
        nullable: true
    })
    publishOn?: Date;
    
    @Column({
        type: 'varchar',
        length: 96,
        nullable: false
    })
    tags!: string[];
    
    @Column({
        type: 'varchar',
        length: 96,
        nullable: false
    })
    metaOption!: string[];
}