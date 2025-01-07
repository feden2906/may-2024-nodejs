import { NextFunction, Request, Response } from "express";
import { UploadedFile } from "express-fileupload";

import { ITokenPayload } from "../interfaces/token.interface";
import { IUserUpdateDto } from "../interfaces/user.interface";
import { userPresenter } from "../presenters/user.presenter";
import { userService } from "../services/user.service";

class UserController {
  public async getList(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await userService.getList();
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async getMe(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const result = await userService.getMe(tokenPayload);
      const response = userPresenter.toShortResponse(result);
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  }

  public async updateMe(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const dto = req.body as IUserUpdateDto;
      const result = await userService.updateMe(tokenPayload, dto);
      const response = userPresenter.toResponse(result);
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  }

  public async deleteMe(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      await userService.deleteMe(tokenPayload);
      res.sendStatus(204);
    } catch (e) {
      next(e);
    }
  }

  public async uploadAvatar(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const file = req.files?.avatar as UploadedFile;
      const result = await userService.uploadAvatar(tokenPayload, file);
      const response = userPresenter.toResponse(result);
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  }

  public async deleteAvatar(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const result = await userService.deleteAvatar(tokenPayload);
      const response = userPresenter.toResponse(result);
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  }

  public async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const result = await userService.getUserById(userId);
      const response = userPresenter.toResponse(result);
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
