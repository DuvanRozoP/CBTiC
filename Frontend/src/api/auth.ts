
import axios from 'axios';

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