import { AuthResponse } from '../types';
import axiosInstance from '../utils/axiosInstance';

export const login = async (username: string, password: string): Promise<AuthResponse> => {
  const response = await axiosInstance.post('/ru/data/v3/testmethods/docs/login', {
    username,
    password,
  });
  return response.data;
};
