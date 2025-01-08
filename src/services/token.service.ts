import * as jwt from "jsonwebtoken";

import { config } from "../configs/config";
import { ActionTokenTypeEnum } from "../enums/action-token-type.enum";
import { TokenTypeEnum } from "../enums/token-type.enum";
import { ApiError } from "../errors/api-error";
import { ITokenPair, ITokenPayload } from "../interfaces/token.interface";

class TokenService {
  public generateTokens(payload: ITokenPayload): ITokenPair {
    const accessToken = jwt.sign(payload, config.jwtAccessSecret, {
      expiresIn: config.jwtAccessExpiresIn,
    });
    const refreshToken = jwt.sign(payload, config.jwtRefreshSecret, {
      expiresIn: config.jwtRefreshExpiresIn,
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  public generateActionTokens(
    payload: ITokenPayload,
    type: ActionTokenTypeEnum,
  ): string {
    let secret: string;
    let expiresIn: string;

    switch (type) {
      case ActionTokenTypeEnum.FORGOT_PASSWORD:
        secret = config.actionForgotPasswordSecret;
        expiresIn = config.actionForgotPasswordExpiresIn;
        break;
      case ActionTokenTypeEnum.EMAIL_VERIFICATION:
        secret = config.actionEmailVerificationSecret;
        expiresIn = config.actionEmailVerificationExpiresIn;
        break;
      default:
        throw new ApiError("Invalid action token type", 500);
    }
    return jwt.sign(payload, secret, { expiresIn });
  }

  public verifyToken(
    token: string,
    type: TokenTypeEnum | ActionTokenTypeEnum,
  ): ITokenPayload {
    try {
      let secret: string;

      switch (type) {
        case TokenTypeEnum.ACCESS:
          secret = config.jwtAccessSecret;
          break;
        case TokenTypeEnum.REFRESH:
          secret = config.jwtRefreshSecret;
          break;
        case ActionTokenTypeEnum.FORGOT_PASSWORD:
          secret = config.actionForgotPasswordSecret;
          break;
        case ActionTokenTypeEnum.EMAIL_VERIFICATION:
          secret = config.actionEmailVerificationSecret;
          break;
        default:
          throw new ApiError("Invalid token type", 401);
      }

      return jwt.verify(token, secret) as ITokenPayload;
    } catch (e) {
      console.error(e.message);
      throw new ApiError("Invalid token", 401);
    }
  }
}

export const tokenService = new TokenService();
