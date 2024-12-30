import { removeOldTokens } from "./remove-old-tokens.cron";
import { testCron } from "./test.cron";

export const cronRunner = async () => {
  testCron.start();
  removeOldTokens.start();
};
