import { Router } from "express";

import { authController } from "../controllers/auth.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.post(
  "/sign-up",
  commonMiddleware.validateBody(UserValidator.create),
  authController.signUp,
);
router.post(
  "/sign-in",
  // commonMiddleware.validateBody(UserValidator.create),
  authController.signIn,
);

// router.post("/refresh", authController.refresh);

export const authRouter = router;
