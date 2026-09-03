import * as zod from "zod";

export const signinSchema = zod.object({
  email: zod.email("Email not valid"),
  password: zod
    .string()
    .regex(
      /^(?=.*[A-Z])\S{6,12}$/,
      "Password must be 6-12 characters and contain at least one uppercase letter.",
    ),
});
