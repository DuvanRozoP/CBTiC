import { Request, Response } from 'express';

export function successResponse(
  _req: Request,
  res: Response,
  status: number,
  message: string | Object
) {
  res.status(status || 200).send({
    success: message,
  });
}

export function errorResponse(
  _req: Request,
  res: Response,
  status: number,
  message: string
) {
  res.status(status || 401).send({
    error: message,
  });
}
