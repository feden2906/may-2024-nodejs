export interface IUser {
  _id: string;
  name: string;
  email: string;
  age: number;
  password: string;
  role: string;
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
