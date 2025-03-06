import type { UserResponse } from "zenmo-types";

import { REGISTER_URL } from "@/utils/constants";

import type { TRegister } from "../auth-schema";

interface IRegisterResponse {
  message: string;
  success: boolean;
  data: UserResponse;
}

export async function registerUserApi(
  register: TRegister,
): Promise<[IRegisterResponse, null] | [null, Error]> {
  try {
    const response = await fetch(`${REGISTER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message);
    }

    return [result, null];
  } catch (err) {
    return [null, err as Error];
  }
}
