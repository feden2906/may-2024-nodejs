import joi from "joi";

export class AuthValidator {
  private static token = joi.string().trim();

  public static verify = joi.object({
    token: this.token.required(),
  });
}
