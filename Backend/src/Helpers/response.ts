import { Response } from 'express';

/**
 * Tipado para return correctamente los datos requiridos para sendServe
 * @param {statusOk} number - status custom de la peticion
 * @param {message} string - mensaje custom de la peticion
 */
export type controller = {
  statusOk?: number;
  message?: any;
};

/**
 * Función que se encarga de dar respuesta concreta al frontend
 * @param {Response} response - response del network
 * @param {Function} controllerFunc - controlador de la peticion
 * @throws {Error} envia una respuesta con su status correspondiente y el mensaje del error de la peticion
 * @description - si no quieres enviar status y/o mensaje de la peticion habran respuesta predeterminas para cuando no envies ninguna de las 2, pero deberas return un objeto vacio "return {}"
 * @example
 * sendServe(response,() => controllador(body.user,body.password))
 */
export async function sendServe(
  response: Response,
  controllerFunc: () => Promise<controller>
) {
  try {
    const { statusOk, message }: controller = await controllerFunc();
    response.status(statusOk || 200).send(message || 'peticion sin mensage');
  } catch (error: any) {
    const customError = error.message.split('-');
    response
      .status(Number(customError[0]) || 500)
      .send(customError[1] || 'error fatal server');
  }
}

/**
 * Tipado para return correctamente los datos requiridos para sendServeHeader
 * @param {statusOk} number - status custom de la peticion
 * @param {message} string - mensaje custom de la peticion
 * @param {token} string el token debe ser seriado por cookie
 */
export type controllerFuncHeader = {
  statusOk?: number;
  message?: string;
  token: string;
};

/**
 * Función que se encarga de dar respuesta concreta al frontend con cookies
 * @param {Response} response - response del network
 * @param {Function} controllerFunc - controlador de la peticion
 * @throws {Error} envia una respuesta con su status correspondiente y el mensaje del error de la peticion
 * @description - si no quieres enviar status y/o mensaje de la peticion habran respuesta predeterminas para cuando no envies ninguna de las 2, pero deberas return un objeto vacio "return {}"
 * @example
 * sendServeHeader(response,() => controllador(body.user,body.password))
 */
export async function sendServeHeader(
  response: Response,
  controllerFunc: () => Promise<controllerFuncHeader>
) {
  try {
    const { statusOk, token, message }: controllerFuncHeader =
      await controllerFunc();
    response
      .setHeader('Set-Cookie', token)
      .status(statusOk || 200)
      .json({
        success: message,
      });
  } catch (error: any) {
    const customError = error.message.split('-');
    response
      .status(Number(customError[0]) || 500)
      .send(customError[1] || 'error fatal server...');
  }
}

export async function errorResponse(response: Response, message: string[]) {
  response
    .status(Number(message[0]) || 500)
    .send(message[1] || 'error fatal server...');
}
