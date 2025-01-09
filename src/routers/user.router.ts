import { Router } from "express";
import { rateLimit } from "express-rate-limit";

import { AvatarConfig } from "../constants/image.constants";
import { userController } from "../controllers/user.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { fileMiddleware } from "../middlewares/file.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get(
  "/",
  commonMiddleware.validateQuery(UserValidator.getListQuery),
  userController.getList,
);

router.get(
  "/me",
  rateLimit({ windowMs: 1000, limit: 1 }),
  authMiddleware.checkAccessToken,
  userController.getMe,
);
router.put(
  "/me",
  authMiddleware.checkAccessToken,
  commonMiddleware.validateBody(UserValidator.update),
  userController.updateMe,
);
router.delete("/me", authMiddleware.checkAccessToken, userController.deleteMe);

router.post(
  "/me/avatar",
  authMiddleware.checkAccessToken,
  fileMiddleware.isFileValid("avatar", AvatarConfig),
  userController.uploadAvatar,
);
router.delete(
  "/me/avatar",
  authMiddleware.checkAccessToken,
  userController.deleteAvatar,
);

router.get(
  "/:userId",
  commonMiddleware.isIdValid("userId"),
  userController.getUserById,
);

export const userRouter = router;
