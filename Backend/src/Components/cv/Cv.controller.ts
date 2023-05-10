import fs from 'fs';
import type { controller } from '../../Helpers/response';
import { isEmpty } from '../../Helpers/validate';

export default function getCv(origin: string): Promise<controller> {
  try {
    isEmpty(origin);
    const files = fs.readdirSync('src/public/cv/');

    const send = files.map((file) => ({
      name: file.replace(/_/g, ' ').split('.')[0],
      url: `http://localhost:3003/cv/${file}`,
    }));
    const data = {
      statusOk: 200,
      message: send,
    };

    const promise = new Promise((resolve) => {
      resolve(data);
    });
    return promise;
  } catch (error: any) {
    console.log(
      '🚀 ~ file: Cv.controller.ts:28 ~ getCv ~ error.message:',
      error
    );
    throw new Error(error.message);
  }
}
