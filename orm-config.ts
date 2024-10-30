import { config as dotenvConfig } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig({ path: '.env' });
console.log(`${process.env.DATABASE_PORT}`);
export const typeOrmConfig: TypeOrmModuleOptions & DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: String(process.env.DATABASE_PASSWORD),
    database: process.env.DATABASE_NAME,
    entities: ["dist/src/entities/*.entity{.ts,.js}"],
    migrations: ["dist/src/migrations/*{.ts,.js}"],
    synchronize: false,
}

export const AppDataSource = new DataSource(typeOrmConfig);