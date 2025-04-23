import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenreModule } from './genre/genre.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Genre} from "./entities/genre.entity";
import {ConfigModule} from "@nestjs/config";
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { MovieModule } from './movie/movie.module';
import {Movie} from "./entities/movie.entity";

@Module({
  imports: [GenreModule,
      ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Genre,Movie],
      synchronize: true,
    }),
    MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
