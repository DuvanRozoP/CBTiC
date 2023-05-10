import axios, { AxiosHeaders } from 'axios';

export const loginRequest = async (user: string, password: string) => {
  try {
    const response = await axios.post('http://localhost:3003/auth/signin', {
      user,
      password,
    });

    const token = response.headers['authorization'];
    console.log(token); // para verificar que el token se ha guardado correctamente
    axios.defaults.headers.get['Authorization'] = 'Bearer ' + token;
    axios.defaults.headers.get['Accept'] = 'application/json';
    return response;
  } catch (error) {
    const errorMessage = (error as { response: { data: string } }).response.data;
    throw new Error(errorMessage);
  }
};

export const userRequest = async () => {
    return await axios.get('http://localhost:3003/auth/User')
}