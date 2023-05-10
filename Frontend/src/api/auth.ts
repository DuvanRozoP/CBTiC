import axios from 'axios';

export const requestAuth = axios.create({
  baseURL: 'http://localhost:3003', // URL base para todas las peticiones
});

requestAuth.interceptors.response.use(config => {
  console.log(config.headers);
  return config
})

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