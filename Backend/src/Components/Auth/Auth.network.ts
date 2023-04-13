import { Request, Response, Router } from 'express';

// * CONTROLLER
import {
  signupController,
  signinController,
  getUserController,
} from './Auth.controller';

// * HELPER RESPONSE
import {
  successResponse,
  successWithHeader,
  errorResponse,
} from '../../Helpers/response';
import { tokenValidation } from '../../libs/validateToken';

const router = Router();

router.post('/signup', async (request: Request, response: Response) => {
  try {
    successWithHeader(request, response, await signupController(request.body));
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'message' in error) {
      const errorMessage = (error as Error).message;
      errorResponse(request, response, errorMessage.split('-'));
    }
  }
});

router.post('/signin', async (request: Request, response: Response) => {
  try {
    successWithHeader(request, response, await signinController(request.body));
  } catch (error: unknown) {
    if (typeof error === 'object' && error !== null && 'message' in error) {
      const errorMessage = (error as Error).message;
      errorResponse(request, response, errorMessage.split('-'));
    }
  }
});

router.get(
  '/user',
  tokenValidation,
  async (request: Request, response: Response) => {
    try {
      successResponse(
        request,
        response,
        200,
        await getUserController(request.userId)
      );
    } catch (error: unknown) {
      if (typeof error === 'object' && error !== null && 'message' in error) {
        const errorMessage = (error as Error).message;
        errorResponse(request, response, errorMessage.split('-'));
      }
    }
  }
);

export default router;
