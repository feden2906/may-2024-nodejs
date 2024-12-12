export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export type IUserDto = Pick<IUser, "name" | "email" | "password">;
