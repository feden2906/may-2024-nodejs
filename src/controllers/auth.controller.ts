import { NextFunction, Request, Response } from "express";

import { ITokenPayload } from "../interfaces/token.interface";
import {
  IForgotPassword,
  IForgotPasswordSet,
  ILogin,
  IUserCreateDto,
} from "../interfaces/user.interface";
import { authService } from "../services/auth.service";

class AuthController {
  public async signUp(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as IUserCreateDto;
      const result = await authService.signUp(dto);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  }

  public async signIn(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as ILogin;
      const result = await authService.signIn(dto);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  }

  public async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const refreshToken = req.res.locals.refreshToken as string;
      const result = await authService.refresh(tokenPayload, refreshToken);
      res.status(201).json(result);
    } catch (e) {
      next(e);
    }
  }

  public async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const tokenId = req.res.locals.tokenId as string;
      const result = await authService.logout(tokenPayload, tokenId);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async logoutAll(req: Request, res: Response, next: NextFunction) {
    try {
      const tokenPayload = req.res.locals.tokenPayload as ITokenPayload;
      const result = await authService.logoutAll(tokenPayload);
      res.json(result);
    } catch (e) {
      next(e);
    }
  }

  public async forgotPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body as IForgotPassword;
      await authService.forgotPassword(dto);
      res.sendStatus(201);
    } catch (e) {
      next(e);
    }
  }

  public async forgotPasswordSet(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    try {
      const dto = req.body as IForgotPasswordSet;
      await authService.forgotPasswordSet(dto);
      res.sendStatus(201);
    } catch (e) {
      next(e);
    }
  }
}

export const authController = new AuthController();
