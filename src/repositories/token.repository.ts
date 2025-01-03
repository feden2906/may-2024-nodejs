import { IToken } from "../interfaces/token.interface";
import { Token } from "../models/token.model";

class TokenRepository {
  public async create(dto: any): Promise<IToken> {
    return await Token.create(dto);
  }

  public async findByParams(params: Partial<IToken>): Promise<IToken> {
    // const aaa = await Token.findOne(params);
    // const bbb = await Token.findOne(params).populate("_userId");
    // console.log(JSON.stringify(aaa, null, 2));
    // console.log('***********************')
    // console.log(JSON.stringify(bbb, null, 2));
    return await Token.findOne(params).populate("_userId");
  }

  public async deleteOneByParams(params: Partial<IToken>): Promise<void> {
    await Token.deleteOne(params);
  }

  public async deleteAllByParams(params: Partial<IToken>): Promise<void> {
    await Token.deleteMany(params);
  }

  public async deleteBeforeDate(date: Date): Promise<number> {
    const result = await Token.deleteMany({ createdAt: { $lt: date } });
    return result.deletedCount;
  }
}

export const tokenRepository = new TokenRepository();
