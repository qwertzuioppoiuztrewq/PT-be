import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export  class CreateMovieDto{
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description: string;

    @IsOptional()
    @IsString()
    releaseDate: Date;

    @IsNotEmpty()
    @IsNumber()
    genre: number;
}
