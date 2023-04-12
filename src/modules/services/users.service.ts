import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserEntity } from "src/modules/entitys/user.entity";
import { ILogin, IUser } from "src/interfaces/user.interface";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity | any>
  ) { }

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async loginUser(data: ILogin): Promise<any> {
    if (!data?.email) throw new NotAcceptableException();
    if (!data?.password) throw new NotAcceptableException();

    const user = await this.userRepository
      .createQueryBuilder('user')
      .where('user.email = :email', { email: data.email })
      .getOne();

    if (!user) throw new NotFoundException();

    const res = {
      user,
      token: "1234 voce esta autenticado",
      statusCode: 200
    }

    return res
  }

  async findById(id: any): Promise<UserEntity> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async create(user: IUser): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }

  async updateUser(data: IUser, id: number): Promise<any> {
    const doc = await this.userRepository.update(id, data);
    if (doc.affected > 0) {
      return doc;
    } else {
      return "Error";
    }
  }

  async deleteUser(id: number): Promise<any> {
    return await this.userRepository.delete(id);
  }
}
