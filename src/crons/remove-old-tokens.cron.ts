import { CronJob } from "cron";

import { config } from "../configs/config";
import { timeHelper } from "../helpers/time.helper";
import { tokenRepository } from "../repositories/token.repository";

const handler = async () => {
  try {
    const string = config.jwtRefreshExpiresIn;
    const { value, unit } = timeHelper.parseConfigString(string);
    const date = timeHelper.subtractCurrentByParams(value, unit);

    const count = await tokenRepository.deleteBeforeDate(date);
    console.log(`Deleted ${count} old tokens`);
  } catch (e) {
    console.error(e.message);
  }
};

export const removeOldTokens = new CronJob("*/10 * * * 9 *", handler);
