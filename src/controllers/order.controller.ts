import { Request, Response, NextFunction } from "express"
import * as orderService from "../services/order.service"

export const getAllOrders = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orders = await orderService.getAllOrders()
    res.json(orders)
  } catch (err) {
    next(err)
  }
}

export const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = await orderService.createOrder(req.body)
    res.json(order)
  } catch (err) {
    next(err)
  }
}