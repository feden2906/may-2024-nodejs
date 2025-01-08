import { FilterQuery } from "mongoose";

import { IOldPassword } from "../interfaces/old-password.interface";
import { OldPassword } from "../models/old-password.model";

class OldPasswordRepository {
  public async getListByUserId(userId: string): Promise<IOldPassword[]> {
    return await OldPassword.find({ _userId: userId });
  }

  public async create(dto: Partial<IOldPassword>): Promise<IOldPassword> {
    return await OldPassword.create(dto);
  }

  public async deleteManyByParams(
    params: FilterQuery<IOldPassword>,
  ): Promise<void> {
    await OldPassword.deleteMany(params);
  }
}

export const oldPasswordRepository = new OldPasswordRepository();
