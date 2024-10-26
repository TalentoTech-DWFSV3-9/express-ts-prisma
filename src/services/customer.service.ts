import { PrismaClient } from "@prisma/client"
import { CustomerInput } from "../validators/customer.validator"


const prisma = new PrismaClient()

export const getAllCustomers = async () => {
  return await prisma.customer.findMany()
}

export const createCustomer = async ({ name, email, phone }: CustomerInput) => {
  return await prisma.customer.create({
    data: {
      name,
      email,
      phone,
    },
  })
}
