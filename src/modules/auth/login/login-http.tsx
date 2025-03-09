import type { UserResponse } from "zenmo-types";

import { LOGIN_URL } from "@/utils/constants";

import type { TLogin } from "../auth-schema";

interface ILoginResponse {
  message: string;
  success: boolean;
  data: UserResponse;
}

/**
 * Authenticates a user by making a POST request to the login endpoint.
 *
 * @param {TLogin} login - The login credentials containing username/email and password.
 * @returns {Promise<[ILoginResponse, null] | [null, Error]>} A promise that resolves to a tuple.
 * The first element is the login response if successful, or null if there was an error.
 * The second element is null if successful, or an Error object if there was an error.
 */
export async function loginUserApi(
  login: TLogin,
): Promise<[ILoginResponse, null] | [null, Error]> {
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
    return [null, err as Error];
  }
}
