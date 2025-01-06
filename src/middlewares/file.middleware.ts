import { NextFunction, Request, Response } from "express";

class FileMiddleware {
  public isFileValid(type?: string) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        // TODO: Implement file validation
        next();
      } catch (e) {
        next(e);
      }
    };
  }
}

export const fileMiddleware = new FileMiddleware();
