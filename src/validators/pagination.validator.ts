import { z } from 'zod';

export const paginationSchema = z.object({
  page: z.number().min(1, { message: "Page must be greater than 0" }),
  limit: z.number().min(1, { message: "Limit must be greater than 0" }),
});

export type PaginationQuery = z.infer<typeof paginationSchema>;