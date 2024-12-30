import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { ActionTokenTypeEnum } from "../enums/action-token-type.enum";
import { authMiddleware } from "../middlewares/auth.middleware";
import { commonMiddleware } from "../middlewares/common.middleware";
import { AuthValidator } from "../validators/auth.validator";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.post(
  "/sign-up",
  commonMiddleware.validateBody(UserValidator.create),
  authController.signUp,
);
router.post(
  "/sign-in",
  commonMiddleware.validateBody(UserValidator.login),
  authController.signIn,
);

router.post(
  "/refresh",
  authMiddleware.checkRefreshToken,
  authController.refresh,
);

router.post("/logout", authMiddleware.checkAccessToken, authController.logout);
router.post(
  "/logout/all",
  authMiddleware.checkAccessToken,
  authController.logoutAll,
);

router.post(
  "/password/forgot",
  commonMiddleware.validateBody(UserValidator.forgotPassword),
  authController.forgotPassword,
);
router.put(
  "/password/forgot",
  authMiddleware.checkActionToken(ActionTokenTypeEnum.FORGOT_PASSWORD),
  authController.forgotPasswordSet,
);
router.put(
  "/password",
  commonMiddleware.validateBody(UserValidator.changePassword),
  authMiddleware.checkAccessToken,
  authController.changePassword,
);

router.post(
  "/verify",
  commonMiddleware.validateBody(AuthValidator.verify),
  authMiddleware.checkActionToken(ActionTokenTypeEnum.EMAIL_VERIFICATION),
  authController.verify,
);

export const authRouter = router;
