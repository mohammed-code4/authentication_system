import type { signinSchema } from "@/schema/SigninSchema";
import * as zod from "zod";

export type SigninType = zod.infer<typeof signinSchema>;
