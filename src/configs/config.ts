import { ObjectCannedACL } from "@aws-sdk/client-s3/dist-types/models/models_0";
import dotenv from "dotenv";

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGGO_URI || "mongodb://localhost:27017/express-mongo",
  frontUrl: process.env.FRONT_URL || "http://localhost:3000",

  jwtAccessSecret: process.env.JWT_ACCESS_SECRET,
  jwtAccessExpiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,

  actionEmailVerificationSecret: process.env.ACTION_EMAIL_VERIFICATION_SECRET,
  actionEmailVerificationExpiresIn:
    process.env.ACTION_EMAIL_VERIFICATION_EXPIRES_IN,
  actionForgotPasswordSecret: process.env.ACTION_FORGOT_PASSWORD_SECRET,
  actionForgotPasswordExpiresIn: process.env.ACTION_FORGOT_PASSWORD_EXPIRES_IN,

  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD,

  AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
  AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,
  AWS_S3_ACL: process.env.AWS_S3_ACL as ObjectCannedACL,
  AWS_REGION: process.env.AWS_REGION,
  AWS_S3_ENDPOINT: process.env.AWS_S3_ENDPOINT,
};
