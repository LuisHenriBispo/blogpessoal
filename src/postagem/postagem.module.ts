import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { postagemController } from "./controllers/postagem.controller";
import { PostagemService } from "./services/postagem.service";

@Module({
    imports:[TypeOrmModule.forFeature([Postagem])],
    controllers: [postagemController],
    providers: [PostagemService],
    exports: [],
})
export class PostagemModule{}    
