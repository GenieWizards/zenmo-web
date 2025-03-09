import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  client: {
    VITE_NODE_ENV: z.string().default("development"),
    VITE_PORT: z.coerce.number().default(4173),
    VITE_API_URL: z
      .string()
      .default("https://finance-management-api-c8hw.onrender.com/api/v1"),
    VITE_API_URL_LOCAL: z.string().default("http://localhost:8999/api/v1"),
  },
  runtimeEnv: {
    NODE_ENV: import.meta.env.VITE_NODE_ENV,
    PORT: import.meta.env.VITE_PORT,
    API_URL: import.meta.env.VITE_API_URL,
  },
  clientPrefix: "VITE_",
});
