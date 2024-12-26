import { ActionTokenTypeEnum } from "../enums/action-token-type.enum";

export interface IActionToken {
  _id: string;
  token: string;
  type: ActionTokenTypeEnum;
  _userId: string;
  createdAt: Date;
  updatedAt: Date;
}
