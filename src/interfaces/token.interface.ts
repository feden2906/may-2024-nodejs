import { RoleEnum } from "../enums/role.enum";

export interface IToken {
  _id: string;
  accessToken: string;
  refreshToken: string;
  _userId: string;
  createdAt: Date;
  updatedAt: Date;
  // asd: string;
}

export interface ITokenPayload {
  userId: string;
  role: RoleEnum;
}

export type ITokenPair = Pick<IToken, "accessToken" | "refreshToken">;
// export type ITokenPair2 = Omit<IToken, "accessToken" | "refreshToken">;
