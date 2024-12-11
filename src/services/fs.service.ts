import fs from "node:fs/promises";
import path from "node:path";

import { IUser } from "../interfaces/user.interface";

const pathToFile = path.resolve(process.cwd(), "db", "users.json");

const read = async (): Promise<IUser[]> => {
  try {
    const json = await fs.readFile(pathToFile, "utf-8");
    return json ? JSON.parse(json) : [];
  } catch (error) {
    console.log("Error:", error.message);
  }
};

const write = async (users: IUser[]): Promise<void> => {
  try {
    await fs.writeFile(pathToFile, JSON.stringify(users, null, 2));
  } catch (error) {
    console.log("Error:", error.message);
  }
};
export { read, write };
