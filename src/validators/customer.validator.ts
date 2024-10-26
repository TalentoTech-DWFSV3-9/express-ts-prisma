import { z } from 'zod';

const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Regex para un formato de teléfono internacional

export const customerSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().regex(phoneRegex, { message: "Invalid phone number" }),
});

// Puedes exportar la validación para usarla en controladores
export type CustomerInput = z.infer<typeof customerSchema>;
