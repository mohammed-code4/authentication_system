import * as zod from "zod";

export const signupSchema = zod.object({
  name: zod
    .string()
    .min(4, "Name length minimun 4 char")
    .max(30, "Name length maximum 30 char"),
  email: zod.email("Email not valid"),
  password: zod
    .string()
    .regex(
      /^(?=.*[A-Z])\S{6,12}$/,
      "Password must be 6-12 characters and contain at least one uppercase letter.",
    ),
  age: zod.string("Age must be at least 18 years old."),
  phone: zod
    .string()
    .regex(
      /^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/,
      "Phone number must be a valid Egyptian number starting with 010, 011, 012, or 015.",
    ),
});
