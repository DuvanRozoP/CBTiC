import AuthSchema from './Auth.model';

import dotenv from 'dotenv';

dotenv.config();

interface dataType {
  User: string;
  Password: string;
}

// * TOKEN
import jwt from 'jsonwebtoken';
// ~ ENV
const secrect = process.env.SECRET_KEY;

// * ENCARGADA DE AGREGAR Y LOGEAR AL USUARIO
export async function addUser({ User, Password }: dataType) {
  // VALIDO QUE LA PALABRA CLAVE EXISTA O DE LO CONTRARIO FINALICE TODA LA PETICION
  if (secrect === undefined) throw new Error('500-Error con la bases de datos');

  // BUSCO EN LA BASE DE DATOS SI EXISTE YA EL USUARIO
  const exists: dataType[] | [] = await AuthSchema.find({ User });

  if (!exists.length) {
    // REGISTRO EL TOKEN CON LA CUENTA
    const token = jwt.sign({ User, Password }, secrect);

    // CREO EL MODELO PARA INGRESAR A LA BASE DE DATOS
    const dataBase = { User, Password, Token: token };

    // HAGO LA INTANCIA CON EL SCHEMA
    const newUser = new AuthSchema(dataBase);

    // HAGO LA CREACION DEL NUEVO REGISTRO
    await newUser.save();

    // DEVUELVO UN MENSAJE SASTIFACTORIO
    return 'Registrado Correctamente';
  }

  // SI ENCONTRO UN USUARIO Y CONCIDE LA CONTRASENA
  const userExists = exists[0];
  if (userExists.User === User && userExists.Password !== Password)
    throw new Error('401-contraseña Incorrecta');

  return 'Logeado correctamente';
}

