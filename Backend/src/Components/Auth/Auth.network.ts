import express, { Request, Response } from 'express';

// * CONTROLLER
import { Login } from './Auth.controller';

// * HELPER RESPONSE
import { successResponse, errorResponse } from '../../Helpers/response';
const router = express.Router();

router.post('/', async (request: Request, response: Response) => {
  try {
    const { user, password } = request.body;
    successResponse(request, response, 200, await Login(user, password));
  } catch (error: any) {
    const arrayMessage = error.message.split('-');
    const status = Number(arrayMessage[0]);
    const Message = arrayMessage[1];
    errorResponse(request, response, status, Message);
  }
});

export default router;
