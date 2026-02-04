import * as z from "zod/v4";

export const workspaceSchema = z.object({
  name: z.string().min(1),
  slug: z.string().min(1),
});
