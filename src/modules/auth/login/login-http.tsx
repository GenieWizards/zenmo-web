import { LOGIN_URL } from "@/utils/constants";

import type { TLogin } from "../auth-schema";

export function loginUserApi(login: TLogin) {
  return fetch(`${LOGIN_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  });
}
