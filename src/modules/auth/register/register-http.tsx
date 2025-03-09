import type { UserResponse } from "zenmo-types";

import { REGISTER_URL } from "@/utils/constants";

import type { TRegister } from "../auth-schema";

interface IRegisterResponse {
  message: string;
  success: boolean;
  data: UserResponse;
}

/**
 * Registers a new user by making a POST request to the registration endpoint.
 *
 * @param {TRegister} register - The registration data containing user information.
 * @returns {Promise<[IRegisterResponse, null] | [null, Error]>} A promise that resolves to a tuple.
 * The first element is the registration response if successful, or null if there was an error.
 * The second element is null if successful, or an Error object if there was an error.
 */
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
      credentials: "include",
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
