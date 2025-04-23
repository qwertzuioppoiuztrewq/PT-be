import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export  class UpdateGenreDto{
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;
}