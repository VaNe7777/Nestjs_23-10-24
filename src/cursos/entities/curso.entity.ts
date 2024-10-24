import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Curso {

     @PrimaryGeneratedColumn()
    id:number

    @Column()
    name: string

    @Column ('varchar',
        {length:30})
        minimumSkill: minimumSkill



}
enum minimumSkill {
    'Beginner',
    'Intermediate',
    'Advance'
}
