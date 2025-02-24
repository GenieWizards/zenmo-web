import z from "zod";

const commonFormSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .trim()
    .min(8, "Password must be atleast 8 characters long")
    .max(60, "Password cannot be more than 60 characters long"),
});

export const loginSchema = commonFormSchema;
export type TLogin = z.infer<typeof loginSchema>;

export const registerSchema = commonFormSchema.extend({
  fullName: z
    .string()
    .min(3, "Full name must be atleast 3 characters long")
    .max(60, "Full name cannot be more than 60 characters long"),
});
export type TRegister = z.infer<typeof registerSchema>;
