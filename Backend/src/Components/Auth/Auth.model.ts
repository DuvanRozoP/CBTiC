import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import { isEmpty, isvalidate } from '../../Helpers/validate';

export interface IAuth extends Document {
  user: string;
  password: string;
  encryptPassword(password: string): Promise<string>;
  validatePassword(password: string): Promise<boolean>;
}

const AuthSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    required: false,
    default: 'unknown',
  },
});

AuthSchema.methods.encryptPassword = async function encryptPassword(
  password: string
): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  const encrypt = await bcrypt.hash(password, salt);
  return encrypt;
};

AuthSchema.methods.validatePassword = async function validatePassword(
  password: string
): Promise<boolean> {
  const response = await bcrypt.compare(password, this.password);
  return response;
};

export const ModelAuthSchema = model<IAuth>('auth', AuthSchema);

export type getAuthType = {
  user: string;
  password: string;
};

// * CLASS
export class AuthenticationClass {
  user: string;

  password: string;

  confirmPassword: string;

  isAuth = false;

  constructor(user: string, password: string, confirmPassword: string) {
    this.user = user;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }

  validate(): boolean {
    isEmpty(this.user, this.password);
    isvalidate(
      [this.user],
      /^[a-zA-Z0-9._%+-]+@gmail.com$/,
      'Debe ser un Correo de Gmail'
    );
    isvalidate(
      [this.password],
      /^(?=.*[A-Z])(?=.*\d).{8,18}$/,
      'tenga al menos una letra mayúscula y un número,maximo 18 caracteres,minimo 8 caracteres'
    );

    if (
      this.confirmPassword.length > 0 &&
      this.confirmPassword !== this.password
    )
      throw new Error('400-Contrasena no son similares');

    this.isAuth = true;
    return true;
  }

  getUserAuth(): getAuthType {
    if (this.isAuth) return { user: this.user, password: this.password };
    throw new Error('400-Datos aun no vereficados');
  }
}
