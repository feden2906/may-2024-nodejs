import { RoleEnum } from "../enums/role.enum";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  age: number;
  password: string;
  role: RoleEnum;
  phone?: string;
  isDeleted: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type IUserCreateDto = Pick<
  IUser,
  "name" | "email" | "age" | "password" | "phone"
>;

export type IUserUpdateDto = Pick<IUser, "name" | "age" | "phone">;

export type ILogin = Pick<IUser, "email" | "password">;

export type IForgotPassword = Pick<IUser, "email">;
export type IForgotPasswordSet = Pick<IUser, "password"> & { token: string };

export type IChangePassword = {
  oldPassword: string;
  newPassword: string;
};
