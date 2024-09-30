import axios from 'axios';

const BASE_URL = 'https://reqres.in/api'; 

export const signUp = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
