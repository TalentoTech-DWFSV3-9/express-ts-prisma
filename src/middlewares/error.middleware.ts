import { Prisma } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';



const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    // Manejar errores específicos de Prisma
    return res.status(400).json({
      status: 400,
      message: err.message,
    });
  }

    if (err instanceof ZodError) {
    // Manejar errores de validación de Zod
    return res.status(400).json({
      status: 400,
      errors: err.errors.map(error => ({
        path: error.path,   // Ruta del campo que falló
        message: error.message, // Mensaje de error
      })),
    });
  }

  res.status(status).json({
    status: status,
    message: err.message || 'Internal Server Error',
  });
};


export default errorMiddleware;
