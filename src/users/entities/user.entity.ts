import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()

export class User {

    
    @PrimaryGeneratedColumn()
    id:number

    @Column('varchar' ,
        {length: 20})
    name: string

    @Column ('varchar',
        {length: 100})
    email: string

    @Column('text')
    rol: string

    @Column('varchar',
        {length: 20})
    password: string

}
