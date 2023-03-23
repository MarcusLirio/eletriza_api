import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UserEntity } from "src/modules/entitys/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "eletriza.cp3r6vfds6g0.us-west-1.rds.amazonaws.com",
      username: "postgres",
      password: "WJML5Qzhr#V39gD",
      database: "eletriza",
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
