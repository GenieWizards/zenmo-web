import { LOGIN_URL } from "@/utils/constants";

import type { TLogin } from "../auth-schema";

export async function loginUserApi(login: TLogin) {
  try {
    const response = await fetch(`${LOGIN_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return [result, null];
  } catch (err) {
    return [null, err];
  }
}
