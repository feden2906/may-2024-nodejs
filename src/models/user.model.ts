import { model, Schema } from "mongoose";

import { RoleEnum } from "../enums/role.enum";
import { IUser } from "../interfaces/user.interface";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    password: { type: String, required: true },
    role: {
      enum: RoleEnum,
      type: String,
      required: true,
      default: RoleEnum.USER,
    },
    phone: { type: String, required: false },
    isDeleted: { type: Boolean, default: false },
    isVerified: { type: Boolean, default: false },
  },
  { timestamps: true, versionKey: false },
);

export const User = model<IUser>("users", userSchema);
