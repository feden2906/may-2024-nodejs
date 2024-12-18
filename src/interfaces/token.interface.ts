import { RoleEnum } from "../enums/role.enum";

export interface IToken {
  _id: string;
  accessToken: string;
  refreshToken: string;
  _userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ITokenPayload {
  userId: string;
  role: RoleEnum;
}

export type ITokenPair = Pick<IToken, "accessToken" | "refreshToken">;
