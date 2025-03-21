export const API_URL
  = import.meta.env.VITE_NODE_ENV === "production"
    ? import.meta.env.VITE_API_URL
    : import.meta.env.VITE_API_URL_LOCAL;

export const LOGIN_URL = `${API_URL}/auth/login`;
export const REGISTER_URL = `${API_URL}/auth/register`;
export const LOGOUT_URL = `${API_URL}/auth/logout`;

export const IS_ENV_PRODUCTION = import.meta.env.VITE_NODE_ENV === "production";
