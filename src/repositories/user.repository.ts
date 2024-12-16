import { IUser, IUserDto } from "../interfaces/user.interface";
import { User } from "../models/user.model";

class UserRepository {
  public async getList(): Promise<IUser[]> {
    return await User.find();
  }

  public async create(dto: IUserDto): Promise<IUser> {
    return await User.create(dto);
  }

  public async getById(userId: string): Promise<IUser> {
    return await User.findById(userId);
  }

  public async updateById(userId: string, dto: IUserDto): Promise<any> {
    //TODO
  }

  public async deleteById(userId: string): Promise<void> {
    //TODO
  }
}

export const userRepository = new UserRepository();
