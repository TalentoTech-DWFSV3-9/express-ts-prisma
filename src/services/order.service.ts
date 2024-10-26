import { PrismaClient, Order } from "@prisma/client"


const prisma = new PrismaClient()

export const getAllOrders = async () => {
  return await prisma.order.findMany()
}

export const createOrder = async (order: any) => {
  const orderCreated = await prisma.order.create({
    data: order,
  })

}