import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from "@nestjs/common";
import { ILogin, IUser } from "../../interfaces/user.interface";
import { UserEntity } from "../entitys/user.entity";
import { UsersService } from "../services/users.service";

@Controller("users")
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Get()
  async index(): Promise<UserEntity[]> {
    return this.usersServices.findAll();
  }

  @Get("login")
  async login(@Body() data: ILogin): Promise<any> {
    return this.usersServices.loginUser(data);
  }

  @Get(":id")
  async findById(@Param("id") id: number): Promise<UserEntity> {
    const entity = await this.usersServices.findById(id);

    if (!entity) {
      throw new NotFoundException();
    }

    return entity;
  }

  @Post()
  async create(@Body() user: IUser): Promise<UserEntity> {
    return this.usersServices.create(user);
  }

  @Put()
  async update(@Body() user: IUser, @Query() id: number): Promise<any> {
    return this.usersServices.updateUser(user, id);
  }

  @Delete("/delete/:id")
  async delete(@Param("id") id: number): Promise<any> {
    return this.usersServices.deleteUser(id);
  }
}
