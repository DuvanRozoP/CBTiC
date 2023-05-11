import axios from "axios";

export const getcvteacher = async () => {
    try {
      const response = await axios.get('http://localhost:3003/cv/teacher');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  export const getcv = async () => {
    try {
      const response = await axios.get('http://localhost:3003/cv/get');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };