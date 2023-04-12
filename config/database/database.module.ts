require('dotenv').config();
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UserEntity } from "src/modules/entitys/user.entity";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.API_HOST,
      username: process.env.API_USERNAME_DB,
      password: process.env.API_PASSWORD_DB,
      database: process.env.DB_NAME,
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
