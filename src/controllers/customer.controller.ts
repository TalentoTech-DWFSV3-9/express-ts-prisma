import { Request, Response, NextFunction } from "express"
import * as customerService from "../services/customer.service"
import { customerSchema, CustomerInput } from "../validators/customer.validator"

export const getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customers = await customerService.getAllCustomers()
    res.json(customers)
  } catch (err) {
    next(err)
  }
}

export const createCustomer = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const customerInput: CustomerInput = customerSchema.parse(req.body)
    const customer = await customerService.createCustomer(customerInput)
    res.json(customer)
  } catch (err) {
    next(err)
  }
}
