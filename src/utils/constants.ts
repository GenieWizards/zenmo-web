import { env } from "@/env";

export const API_URL
  = env.VITE_NODE_ENV === "production"
    ? env.VITE_API_URL
    : env.VITE_API_URL_LOCAL;

export const LOGIN_URL = `${API_URL}/auth/login`;
export const REGISTER_URL = `${API_URL}/auth/register`;
export const LOGOUT_URL = `${API_URL}/auth/logout`;
