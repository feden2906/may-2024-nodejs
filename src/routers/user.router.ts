import { NextFunction, Request, Response, Router } from "express";

import { userController } from "../controllers/user.controller";
import { ApiError } from "../errors/api-error";

const router = Router();

const validateUserData = (req: Request, res: Response, next: NextFunction) => {
  try {
    const dto = req.body;
    if (!dto.name || dto.name.length < 3) {
      throw new ApiError(
        "Name is required and should be minimum 3 symbols",
        400,
      );
    }
    if (!dto.email || !dto.email.includes("@")) {
      throw new ApiError("Email is required", 400);
    }
    if (!dto.password || dto.password.length < 8) {
      throw new ApiError(
        "Password is required and should be minimum 8 symbols",
        400,
      );
    }
    req.body = dto;
    next();
  } catch (e) {
    next(e);
  }
};

router.get("/", userController.getList);
router.post("/", validateUserData, userController.create);

router.get("/:userId", userController.getUserById);
router.put("/:userId", validateUserData, userController.updateUser);
router.delete("/:userId", userController.deleteUser);

export const userRouter = router;
