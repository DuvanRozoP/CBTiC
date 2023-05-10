/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';
import { ModelAuthSchema, IAuth, AuthenticationClass } from './Auth.model';
import { controllerFuncHeader } from '../../Helpers/response';
import { sinGinParams } from '../types';

dotenv.config();
// ~ ENV
const secrect = process.env.SECRET_KEY;

// * ENCARGADA DE REGISTRAR
export async function signup(
  userData: AuthenticationClass
): Promise<controllerFuncHeader> {
  try {
    // VALIDO QUE LA PALABRA CLAVE EXISTA O DE LO CONTRARIO FINALICE TODA LA PETICION
    if (secrect === undefined)
      throw new Error('500-Error con la bases de datos');

    const { user, password } = userData.getUserAuth();
    const userLower = user.toLowerCase();
    // BUSCO EN LA BASE DE DATOS SI EXISTE YA EL USUARIO
    const exists = await ModelAuthSchema.findOne({ user: userLower });

    if (exists?.user === user) throw new Error('400-Usuario ya existe');

    const newUser: IAuth = new ModelAuthSchema({ user, password });
    const generateToken = jwt.sign({ id: newUser.id }, secrect, {
      expiresIn: 60 * 60 * 6,
    });
    newUser.password = await newUser.encryptPassword(newUser.password);

    await newUser.save();

    const token = serialize('auth-token-cookie', generateToken, {
      httpOnly: true,
      secure: false,
      path: '/',
      sameSite: 'strict',
    });

    const response: controllerFuncHeader = {
      statusOk: 200,
      token,
      message: 'Registrado correctamente',
    };
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// * ENCARGADA DE LOGEAR
// * ENCARGADA DE LOGEAR
export async function signin(
  body: sinGinParams
): Promise<controllerFuncHeader> {
  try {
    console.time('Rendimiento-Signin-Store');
    if (secrect === undefined)
      throw new Error('500-Error con la bases de datos');

    const { email, password } = body;
    const emailLower = email.toLowerCase();
    const exists = await ModelAuthSchema.findOne({ email: emailLower });
    if (!exists) throw new Error('400-Usuario no existe');

    const passwordCorrect: boolean = await exists.validatePassword(password);
    if (!passwordCorrect) throw new Error('400-Contrasena incorrecta');

    const generateToken = jwt.sign({ id: 'funciono' }, secrect, {
      expiresIn: 60 * 60 * 6,
    });

    const token = serialize('auth-token-cookie', generateToken, {
      httpOnly: true,
      secure: false,
      path: '/',
      sameSite: 'strict',
    });

    const response: controllerFuncHeader = {
      statusOk: 200,
      token,
      message: 'Logeado Correctamente...',
    };
    console.timeEnd('Rendimiento-Signin-Store');
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// * ENCARGADA DE DEVOLVER USUARIOS
export async function getAllUser(userId: string) {
  try {
    const exists = await ModelAuthSchema.findById(userId);
    if (!exists) throw new Error('400-usuario denegado');

    const allUser = await ModelAuthSchema.find();
    return allUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
