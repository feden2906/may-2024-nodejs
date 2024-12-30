import dayjs, { ManipulateType } from "dayjs";

class TimeHelper {
  public parseConfigString(str: string): {
    value: number;
    unit: ManipulateType;
  } {
    const [value, unit] = str.split(" ");
    return {
      value: parseInt(value),
      unit: unit as ManipulateType,
    };
  }

  public subtractCurrentByParams(value: number, unit: ManipulateType): Date {
    return dayjs().subtract(value, unit).toDate();
  }
}

export const timeHelper = new TimeHelper();
