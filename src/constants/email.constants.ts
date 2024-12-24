import { EmailTypeEnum } from "../enums/email-type.enum";

export const emailConstants = {
  [EmailTypeEnum.WELCOME]: {
    subject: "Welcome subject",
    template: "welcome",
  },
  [EmailTypeEnum.FORGOT_PASSWORD]: {
    subject: "Forgot password subject",
    template: "forgot-password",
  },
  [EmailTypeEnum.OLD_VISIT]: {
    subject: "Old visit subject",
    template: "old-visit",
  },
  [EmailTypeEnum.LOGOUT]: {
    subject: "Logout subject",
    template: "logout",
  },
};
