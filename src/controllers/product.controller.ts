import { Request, Response, NextFunction } from "express"
import * as productService from "../services/product.service"
import { productSchema } from "../validators/product.validator"

export const getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await productService.getAllProducts()
    res.json(products)
  } catch (err) {
    next(err)
  }
}

export const createProduct = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const validateProduct = productSchema.safeParse(req.body)
    if (!validateProduct.success) {
     next(validateProduct.error)
    }
    const productParsed = productSchema.parse(req.body)
    const product = await productService.createProduct(req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
}

export const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id)
    const product = await productService.getProductById(id)
    res.json(product)
  } catch (err) {
    next(err)
  }
}

export const updateProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productService.updateProductById(Number(req.params.id), req.body)
    res.json(product)
  } catch (err) {
    next(err)
  }
}

export const deleteProductById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await productService.deleteProductById(parseInt(req.params.id))
    res.json(product)
  } catch (err) {
    next(err)
  }
}
