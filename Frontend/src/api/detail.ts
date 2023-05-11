import axios from 'axios'

export const getDetails = async () => {
    try {
      const response = await axios.get('http://localhost:3003/Detail/get');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };