// * STORE
import { signup, signin, getAllUser } from './Auth.store';

// * HELPERS
import { AuthenticationClass } from './Auth.model';

interface signupControllerType {
  user: string;
  password: string;
  confirmPassword: string;
}

interface signinControllerType {
  user: string;
  password: string;
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

export async function signinController({
  user,
  password,
}: signinControllerType) {
  try {
    const controllerUser = new AuthenticationClass(user, password, '');

    // * VALIDANDO DATOS
    controllerUser.validate();

    // * ENVIANDO DATOS PARA LOGEAR
    return signin(controllerUser);
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
