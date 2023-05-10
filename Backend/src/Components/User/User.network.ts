import { Request, Response, Router } from 'express';
// & HELPERS
import { sendServe } from '../../Helpers/response';
// * CONTROLLERS
import getAsignaturas from './User.controller';

const router = Router();

// localhost:3003/cv/Alfonso_Nicolas_Romero_Arias.docx
// router.use(express.static('src/public/cv'));

router.get('/get', (_request: Request, response: Response) => {
  sendServe(response, () => getAsignaturas());
});

export default router;
