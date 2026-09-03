import { signupSchema } from "@/schema/SignupSchema";
import * as zod from "zod";

export type SignupForm = zod.infer<typeof signupSchema>;
