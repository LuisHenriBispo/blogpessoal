import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Blog Pessoal')
  .setDescription('Projeto Blog Pessoal')
  .setContact("Luis Bispo","https://github.com/LuisHenriBispo","https://www.linkedin.com/in/luis-henrique-bispo")
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  //horario de brasilia
  process.env.TZ = '-03:00';

  // biblioteca validacao
  app.useGlobalPipes(new ValidationPipe());

  // quem acessa ou nao a aplicacao
  app.enableCors();

  //variavel ambiente port4000
  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
