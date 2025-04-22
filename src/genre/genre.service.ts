import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Genre} from "../entities/genre.entity";
import {CreateGenreDto} from "./create-genre.dto";

@Injectable()
export class GenreService {
    constructor(
        @InjectRepository(Genre)
        private  readonly genreRepository: Repository<Genre>
    ){}
    create(createGenreDto:CreateGenreDto):Promise<Genre>{
        const genre= this.genreRepository.create(createGenreDto);
        return this.genreRepository.save(genre)
    }

    findAll():Promise<Genre[]>{
        return this.genreRepository.find();
    }
}
