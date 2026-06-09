import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = error.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: error.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
  });
};
