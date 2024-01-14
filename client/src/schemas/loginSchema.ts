import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(13, "Email should be at least 13 characters")
    .max(50, "Email should be maximum 50 characters")
    .email(),
  password: z
    .string()
    .min(5, "Password should be at least 5 characters")
    .max(50, "Password should be maximum 50 characters"),
});

export default loginSchema;
