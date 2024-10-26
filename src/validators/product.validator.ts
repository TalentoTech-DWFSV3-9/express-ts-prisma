import { z } from "zod"

export const productSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "The field name can't be longer than 100 characters"),
  price: z.number().min(1, { message: "Price is required" }),
  stock: z.number().min(1, { message: "Stock is required" }),
})

// Puedes exportar la validación para usarla en controladores
export type ProductInput = z.infer<typeof productSchema>
