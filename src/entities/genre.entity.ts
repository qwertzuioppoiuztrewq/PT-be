import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Movie} from "./movie.entity";

@Entity('genres')
export class Genre{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    description: string;

    @OneToMany(()=>Movie, movie=>movie.genre)
    movies: Movie[];
}