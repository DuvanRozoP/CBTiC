import express, { Request, Response, Router } from 'express';
// & HELPERS
import { sendServe } from '../../Helpers/response';
// * CONTROLLERS
import getCv from './Cv.controller';

const router = Router();

// localhost:3003/cv/Alfonso_Nicolas_Romero_Arias.docx
router.use(express.static('src/public/cv'));

router.get('/get', (_request: Request, response: Response) => {
  sendServe(response, () => getCv('src/public/cv'));
});

export default router;
