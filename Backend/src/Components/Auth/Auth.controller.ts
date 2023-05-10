/* eslint-disable no-console */
// * STORE
import { signup, signin, getAllUser } from './Auth.store';

// * HELPERS
import { AuthenticationClass } from './Auth.model';
import type { controllerFuncHeader } from '../../Helpers/response';
import { isEmpty, isvalidate } from '../../Helpers/validate';
import { sinGinParams } from '../types';

interface signupControllerType {
  user: string;
  password: string;
  confirmPassword: string;
}

export async function signupController({
  user,
  password,
  confirmPassword,
}: signupControllerType) {
  try {
    const controllerUser = new AuthenticationClass(
      user,
      password,
      confirmPassword
    );

    // * VALIDANDO DATOS
    controllerUser.validate();

    // * ENVIANDO DATOS PARA AGREGAR
    return signup(controllerUser);
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function signinController(body: sinGinParams): Promise<controllerFuncHeader>  {
  try {
    console.time('Rendimiento-Signin-Controller');
    const {email, password} = body

    isEmpty(email, password);
    isvalidate(
      [email],
      /^[a-zA-Z0-9._%+-]+@gmail.com$/,
      'Debe ser un Correo de Gmail'
    );
    isvalidate(
      [password],
      /^(?=.*[A-Z])(?=.*\d).{8,18}$/,
      'tenga al menos una letra mayúscula y un número,maximo 18 caracteres,minimo 8 caracteres'
    );

    console.timeEnd('Rendimiento-Signin-Controller');
    // * ENVIANDO DATOS PARA LOGEAR
    return await signin(body);
  } catch (error: any) {
    throw new Error(error.message);
  }
} 

export async function getUserController(userId: string) {
  try {
    if (!userId) throw new Error('400-Usuario Denegado');
    return getAllUser(userId);
  } catch (error: any) {
    throw new Error(error.message);
  }
}
