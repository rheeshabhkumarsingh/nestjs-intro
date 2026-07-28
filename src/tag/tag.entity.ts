import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: false
    })
    slug: string;

    @Column({
        type: 'varchar',
        length: 96,
        nullable: true
    })
    description?: string;

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
    fraturedImageUrl?: string;

    @CreateDateColumn()
    createDate: Date;

    @UpdateDateColumn()
    updateDate: Date;

    @DeleteDateColumn()
    deletedAt: Date;
}