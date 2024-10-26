import { PrismaClient } from "@prisma/client"
import { CustomerInput } from "../validators/customer.validator"
import { PaginationQuery } from "../validators/pagination.validator"
const prisma = new PrismaClient()

export const getAllCustomers = async (pagination: PaginationQuery) => {
  const { page, limit } = pagination
  return await prisma.customer.findMany({
    skip: page * limit - limit,
    take: limit,
  })
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
