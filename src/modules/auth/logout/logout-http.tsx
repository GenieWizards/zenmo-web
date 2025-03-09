import { LOGOUT_URL } from "@/utils/constants";

interface ILogoutResponse {
  message: string;
  success: boolean;
}

/**
 * Logs out the user by making a POST request to the logout URL.
 *
 * @returns {Promise<[ILogoutResponse, null] | [null, Error]>} A promise that resolves to a tuple.
 * The first element is the logout response if successful, or null if there was an error.
 * The second element is null if successful, or an Error object if there was an error.
 */
export async function logoutUserApi(): Promise<
  [ILogoutResponse, null] | [null, Error]
> {
  try {
    const response = await fetch(`${LOGOUT_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
