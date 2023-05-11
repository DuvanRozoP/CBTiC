import { Request, Response, Router } from 'express';
// & HELPERS
import { sendServe } from '../../Helpers/response';
// * CONTROLLERS
import { getCv, getTeacher } from './Cv.controller';

const router = Router();

// localhost:3003/cv/Alfonso_Nicolas_Romero_Arias.docx

router.get('/get', (_request: Request, response: Response) => {
  sendServe(response, () => getCv('src/public/cv'));
});

router.get('/teacher', (_request: Request, response: Response) => {
  sendServe(response, () => getTeacher());
});


export default router;
