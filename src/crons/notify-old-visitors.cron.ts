import { CronJob } from "cron";

import { timeHelper } from "../helpers/time.helper";
import { userRepository } from "../repositories/user.repository";

const handler = async () => {
  try {
    console.log("Notify old visitors cron started");

    const date = timeHelper.subtractCurrentByParams(5, "days");
    const users = await userRepository.findWithOutActivity(date);
    console.log(users);
    console.log("Notify old visitors cron finished");
  } catch (e) {
    console.error(e.message);
  }
};

export const notifyOldVisitors = new CronJob("*/10 * * * * *", handler);
