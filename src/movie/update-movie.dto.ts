import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export  class UpdateMovieDto{
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsString()
    releaseDate?: Date;

    @IsOptional()
    @IsNumber()
    genre: number;
}