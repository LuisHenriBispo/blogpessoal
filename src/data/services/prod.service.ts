import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class ProdService implements TypeOrmOptionsFactory {

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      url: "postgresql://db_blogpessoal_n02n_user:Ah5X67QApllMFUegYAZpE2Jd8w9QpMcW@dpg-d2d0guqdbo4c73c77fs0-a.oregon-postgres.render.com/db_blogpessoal_n02n",
      logging: false,
      dropSchema: false,
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: true,
      autoLoadEntities: true,
    };
  }
}