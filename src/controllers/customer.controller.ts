import { Request, Response,NextFunction } from "express"
import * as customerService from "../services/customer.service"
import { customerSchema, CustomerInput } from "../validators/customer.validator"
import { paginationSchema } from "../validators/pagination.validator"

export const getAllCustomers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page, limit } = req.query
    const pagination = { page: parseInt(page as string), limit: parseInt(limit as string) }
    const validatedPagination = paginationSchema.parse(pagination)
    if (validatedPagination.page < 1 || validatedPagination.limit < 1) {
      return res.status(400).json({ message: "Page and limit must be greater than 0" })
    }
    const customers = await customerService.getAllCustomers(pagination)
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
