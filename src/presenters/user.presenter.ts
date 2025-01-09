import { config } from "../configs/config";
import {
  IUser,
  IUserListQuery,
  IUserListResponse,
  IUserResponse,
  IUserShortResponse,
} from "../interfaces/user.interface";

class UserPresenter {
  public toResponse(entity: IUser): IUserResponse {
    return {
      _id: entity._id,
      name: entity.name,
      email: entity.email,
      age: entity.age,
      role: entity.role,
      avatar: entity.avatar
        ? `${config.AWS_S3_ENDPOINT}/${entity.avatar}`
        : null,
      phone: entity.phone,
      isDeleted: entity.isDeleted,
      isVerified: entity.isVerified,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  public toShortResponse(entity: IUser): IUserShortResponse {
    return {
      _id: entity._id,
      name: entity.name,
      age: entity.age,
      avatar: entity.avatar
        ? `${config.AWS_S3_ENDPOINT}/${entity.avatar}`
        : null,
      createdAt: entity.createdAt,
    };
  }

  public toResponseList(
    entities: IUser[],
    total: number,
    query: IUserListQuery,
  ): IUserListResponse {
    return {
      data: entities.map(this.toShortResponse),
      total,
      ...query,
    };
  }
}

export const userPresenter = new UserPresenter();
