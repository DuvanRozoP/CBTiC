import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';

export interface IUser {
  _id: ObjectId;
  user: string;
  password: string;
  __v: number;
}

export interface HeaderSuccess {
  status: number;
  header: string;
  token: string;
  messageSuccess: string;
}

export function successResponse(
  _req: Request,
  res: Response,
  status: number,
  message: string | IUser[]
) {
  res.status(status || 200).send({
    success: message,
  });
}

export function successWithHeader(
  _req: Request,
  res: Response,
  message: HeaderSuccess
) {
  const { status, header, token, messageSuccess } = message;
  res
    .status(status || 200)
    .header(header, token)
    .send({
      success: messageSuccess,
    });
}

export function errorResponse(
  _req: Request,
  res: Response,
  errorFatal: string[]
) {
  res.status(Number(errorFatal[0]) || 401).send({
    error: errorFatal[1],
  });
}
