import { userRepository } from "../repositories/user.repository";

class UserService {
  public async getList(): Promise<any[]> {
    return await userRepository.getList();
  }
  public async create(dto: Partial<any>): Promise<any> {
    return await userRepository.create(dto);
  }
}

export const userService = new UserService();
