import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('equipments')
export default class Equipment {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    picture: string;
}