import { signupSchema } from "@/schema/SignupSchema";
import * as zod from "zod";

export type SignupType = zod.infer<typeof signupSchema>;
