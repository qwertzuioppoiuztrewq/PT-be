import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {DeleteResult, Repository} from "typeorm";
import {Genre} from "../entities/genre.entity";
import {CreateGenreDto} from "./create-genre.dto";
import {UpdateGenreDto} from "./update-genre.dto";

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

    async update(id: number, updateGenreDto: UpdateGenreDto): Promise<Genre |null>{
        await this.genreRepository.update(id,updateGenreDto);
        return this.genreRepository.findOneBy({id});
    }

    findAll():Promise<Genre[]>{
        return this.genreRepository.find();
    }

    findOne(id: number):Promise<Genre |null>{
        return this.genreRepository.findOneBy({id});
    }


    delete(id: number):Promise<DeleteResult>{
        return this.genreRepository.delete({id});
    }



}
