import { config } from "dotenv";
import { z } from "zod";

config();

export type Env = z.infer<typeof Env>;
export const Env = z.object({
  ADMIN_PASSWORD: z.string(),
  ADMIN_USERNAME: z.string(),
  
  NODE_ENV: z.enum(["development", "production"]),
});
