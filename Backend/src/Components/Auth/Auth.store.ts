import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ModelAuthSchema, IAuth, AuthenticationClass } from './Auth.model';
import { HeaderSuccess, IUser } from '../../Helpers/response';

dotenv.config();
// ~ ENV
const secrect = process.env.SECRET_KEY;

// * ENCARGADA DE REGISTRAR
export async function signup(userData: AuthenticationClass) {
  try {
    // VALIDO QUE LA PALABRA CLAVE EXISTA O DE LO CONTRARIO FINALICE TODA LA PETICION
    if (secrect === undefined)
      throw new Error('500-Error con la bases de datos');

    const { user, password } = userData.getUserAuth();

    // BUSCO EN LA BASE DE DATOS SI EXISTE YA EL USUARIO
    const exists = await ModelAuthSchema.findOne({ user });

    if (exists?.user === user) throw new Error('400-Usuario ya existe');

    const newUser: IAuth = new ModelAuthSchema({ user, password });
    const token = jwt.sign({ id: newUser.id }, secrect, {
      expiresIn: 60 * 60 * 6,
    });
    newUser.password = await newUser.encryptPassword(newUser.password);

    await newUser.save();
    const response: HeaderSuccess = {
      status: 200,
      header: 'auth-token',
      token,
      messageSuccess: 'Registrado correctamente',
    };
    return response;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

// * ENCARGADA DE LOGEAR
export async function signin(userData: AuthenticationClass) {
  try {
    if (secrect === undefined)
      throw new Error('500-Error con la bases de datos');

    const { user, password } = userData.getUserAuth();
    const exists = await ModelAuthSchema.findOne({ user });
    if (!exists) throw new Error('400-Usuario no existe');

    const passwordCorrect: boolean = await exists.validatePassword(password);
    if (!passwordCorrect) throw new Error('400-Contrasena incorrecta');

    const token = jwt.sign({ id: exists.id }, secrect, {
      expiresIn: 60 * 60 * 6,
    });

    const response: HeaderSuccess = {
      status: 200,
      header: 'auth-token',
      token,
      messageSuccess: 'Logeado correctamente',
    };
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

    const allUser = (await ModelAuthSchema.find()) as IUser[];
    return allUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
