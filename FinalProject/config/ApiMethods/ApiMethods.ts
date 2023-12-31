import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const ApiHandle = axios.create({
  baseURL: 'http://192.168.105.128:5000',
  headers: {
    Authorization: `Bearer ${AsyncStorage.getItem('authToken')}`,
  },
});

export const Get = (endPoint: string, id?: number | string) => {
  return ApiHandle.get(`${endPoint}/${id ? id : ''}`);
};

export const Post = (endPoint: string, model?: {}) => {
  return ApiHandle.post(`${endPoint}`, model);
};

export const Put = (endPoint: string, model?: {}) => {
  return ApiHandle.put(`${endPoint}`, model);
};

export const Delete = (endPoint: string, id?: number | string) => {
  return ApiHandle.delete(`${endPoint}/${id ? id : ''}`);
};
