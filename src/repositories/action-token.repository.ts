import { IActionToken } from "../interfaces/action-token.interface";
import { ActionToken } from "../models/action-token.model";

class ActionTokenRepository {
  public async create(dto: Partial<IActionToken>): Promise<IActionToken> {
    return await ActionToken.create(dto);
  }

  public async findOneByParams(
    params: Partial<IActionToken>,
  ): Promise<IActionToken> {
    return await ActionToken.findOne(params);
  }

  public async deleteOneByParams(params: Partial<IActionToken>): Promise<void> {
    await ActionToken.deleteOne(params);
  }
}

export const actionTokenRepository = new ActionTokenRepository();
