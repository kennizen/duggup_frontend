import { userDataById } from "../db";

export async function load() {
  return userDataById;
}
