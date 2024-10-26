import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const getAllProducts = async () => {
  return await prisma.product.findMany()
}

export const createProduct = async (product: any) => {
  return await prisma.product.create({
    data: product,
  })
}

export const getProductById = async (id: number) => {
  return await prisma.product.findUnique({
    where: {
      id: id,
    },
  })
}

export const updateProductById = async (id: number, product: any) => {
  return await prisma.product.update({
    where: {
      id: id,
    },
    data: product,
  })
}

export const deleteProductById = async (id: number) => {
  return await prisma.product.delete({
    where: {
      id: id,
    },
  })
} 