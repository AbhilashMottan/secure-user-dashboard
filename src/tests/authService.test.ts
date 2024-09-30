import axios from 'axios';

const BASE_URL = 'https://reqres.in/api'; 

export const signIn = async (email: string, password: string) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

export const signUp = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      email,
      password,
    },{
        headers: {
          'Content-Type': 'application/json',
        },
      });
    return response.data;
  } catch (error) {
    throw error;
  }
};
