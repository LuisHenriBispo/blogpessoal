import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
//import { Postagem } from "src/postagem/entities/postagem.entity";
import { postagemController } from "./controllers/postagem.controller";
import { PostagemService } from "./services/postagem.service";
import { TemaModule } from "../tema/tema.module";
import { Postagem } from "./entities/postagem.entity";

@Module({
    imports:[TypeOrmModule.forFeature([Postagem]), TemaModule],
    controllers: [postagemController],
    providers: [PostagemService],
    exports: [TypeOrmModule],
})
export class PostagemModule{}    
