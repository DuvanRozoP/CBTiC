import axios from 'axios';

export const requestAuth = axios.create({
  baseURL: 'http://localhost:3003', // URL base para todas las peticiones
});

requestAuth.interceptors.response.use(config => {
  console.log(config.headers);
  return config
})

export const loginRequest = async (user: string, password: string) => {
  return axios.post('http://localhost:3003/auth/signin', {
    user,
    password
  },{
    headers:{
     
    }
  });
}
export const userRequest =async () => {
    return await axios.get('http://localhost:3003/auth/User')
}