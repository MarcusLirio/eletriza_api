import { Module } from "@nestjs/common";
import { UsersModule } from "./modules/users.module";
import { DatabaseModule } from "../config/database/database.module";

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
