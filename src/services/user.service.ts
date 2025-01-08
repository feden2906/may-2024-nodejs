import { UploadedFile } from "express-fileupload";

import { FileItemTypeEnum } from "../enums/file-item-type.enum";
import { ApiError } from "../errors/api-error";
import { ITokenPayload } from "../interfaces/token.interface";
import {
  IUser,
  IUserListQuery,
  IUserListResponse,
  IUserUpdateDto,
} from "../interfaces/user.interface";
import { userPresenter } from "../presenters/user.presenter";
import { userRepository } from "../repositories/user.repository";
import { s3Service } from "./s3.service";

class UserService {
  public async getList(query: IUserListQuery): Promise<IUserListResponse> {
    const { entities, total } = await userRepository.getList(query);
    return userPresenter.toResponseList(entities, total, query);
  }

  public async getMe(tokenPayload: ITokenPayload): Promise<IUser> {
    const user = await userRepository.getById(tokenPayload.userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    return user;
  }

  public async updateMe(
    tokenPayload: ITokenPayload,
    dto: IUserUpdateDto,
  ): Promise<IUser> {
    const user = await userRepository.getById(tokenPayload.userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    return await userRepository.updateById(user._id, dto);
  }

  public async deleteMe(tokenPayload: ITokenPayload): Promise<void> {
    const user = await userRepository.getById(tokenPayload.userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    await userRepository.deleteById(tokenPayload.userId);
  }

  public async uploadAvatar(
    tokenPayload: ITokenPayload,
    file: UploadedFile,
  ): Promise<IUser> {
    const user = await userRepository.getById(tokenPayload.userId);
    const avatar = await s3Service.uploadFile(
      file,
      FileItemTypeEnum.USER,
      user._id,
    );
    const updatedUser = await userRepository.updateById(user._id, { avatar });
    if (user.avatar) {
      await s3Service.deleteFile(user.avatar);
    }
    return updatedUser;
  }
  public async deleteAvatar(tokenPayload: ITokenPayload): Promise<IUser> {
    const user = await userRepository.getById(tokenPayload.userId);
    await s3Service.deleteFile(user.avatar);
    const updatedUser = await userRepository.updateById(user._id, {
      avatar: null,
    });
    return updatedUser;
  }

  public async isEmailUnique(email: string): Promise<void> {
    const user = await userRepository.getByEmail(email);
    if (user) {
      throw new ApiError("Email is already in use", 409);
    }
  }

  public async getUserById(userId: string): Promise<IUser> {
    const user = await userRepository.getById(userId);
    if (!user) {
      throw new ApiError("User not found", 404);
    }
    return user;
  }
}

export const userService = new UserService();
