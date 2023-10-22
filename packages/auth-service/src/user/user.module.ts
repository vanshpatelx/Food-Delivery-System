// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { AuthUser } from '../entity&DTOs/user.entity';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: "postgres",
        host: process.env.AUTH_DB_HOST,
        port: Number(process.env.AUTH_DB_PORT),
        username: process.env.AUTH_DB_USERNAME,
        password: process.env.AUTH_DB_PASSWORD,
        database: process.env.AUTH_DB_DATABASE,
        entities: [AuthUser],
        synchronize: true,
      })
    ,TypeOrmModule.forFeature([AuthUser])],
  controllers: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
