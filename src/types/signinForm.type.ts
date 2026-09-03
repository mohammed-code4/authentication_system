import type { signinSchema } from "@/schema/SigninSchema";
import * as zod from "zod";

export type SigninForm = zod.infer<typeof signinSchema>;
