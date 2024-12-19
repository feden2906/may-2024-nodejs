import * as jwt from "jsonwebtoken";

import { config } from "../configs/config";
import { ApiError } from "../errors/api-error";
import { ITokenPair, ITokenPayload } from "../interfaces/token.interface";
import {TokenTypeEnum} from "../enums/token-type.enum";

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

  public verifyToken(token: string, type: TokenTypeEnum): ITokenPayload {
    try {
      let secret: string;

      switch (type) {
        case "access":
          secret = config.jwtAccessSecret;
          break;
        case "refresh":
          secret = config.jwtRefreshSecret;
          break;
        default:
          throw new ApiError("Invalid token type", 401);
      }

      return jwt.verify(token, secret) as ITokenPayload;
    } catch (e) {
      throw new ApiError("Invalid token", 401);
    }
  }
}

export const tokenService = new TokenService();
