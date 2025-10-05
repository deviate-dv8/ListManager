import { ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { DataSourceOptions } from 'typeorm';

// Config Service Validation Schema
export const configuration = Joi.object({
  JWT_SECRET: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().required(),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
});

export const getTypeOrmConfig = (
  configService: ConfigService,
): DataSourceOptions => ({
  type: 'postgres',
  host: configService.get<string>('DATABASE_HOST'),
  port: configService.get<number>('DATABASE_PORT') || 5432,
  username: configService.get<string>('DATABASE_USER'),
  password: configService.get<string>('DATABASE_PASSWORD'),
  database: configService.get<string>('DATABASE_NAME'),
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../database/migrations/*{.ts,.js}'],
  synchronize: false,
});
