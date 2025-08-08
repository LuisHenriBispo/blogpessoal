import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { PostagemService } from "../services/postagem.service";
//import { Postagem } from "src/postagem/entities/postagem.entity";
//import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Postagem } from "../entities/postagem.entity";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";

@UseGuards(JwtAuthGuard)
@Controller("/postagens")
export class postagemController{
    constructor(private readonly postagemService: PostagemService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]>{
        return this.postagemService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findbyId(@Param('id', ParseIntPipe) id: number): Promise<Postagem>{
        return this.postagemService.findbyId(id);
    }

    @Get('/titulo/:titulo')
    @HttpCode(HttpStatus.OK)
    findAllbyTitulo(@Param('titulo') titulo: string): Promise<Postagem[]>{
        return this.postagemService.findAllbyTitulo(titulo);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() postagem : Postagem) : Promise<Postagem>{
        return this.postagemService.create(postagem);
    }

    @Put()
    @HttpCode(HttpStatus.CREATED)
    update(@Body() postagem : Postagem) : Promise<Postagem>{
        return this.postagemService.update(postagem);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id',ParseIntPipe) id : number){
        return this.postagemService.delete(id);
    }
}