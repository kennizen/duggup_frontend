import { userData } from "../db.js";

export async function load() {
  return {
    userData: userData,
  };
}
