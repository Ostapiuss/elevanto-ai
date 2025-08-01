import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { BASE_API_URL } from '@shared/constants/common';

const apiKey = import.meta.env.VITE_FLOTIQ_API_KEY;

const defaultConfiguration: AxiosRequestConfig = {
  responseType: 'json',
  timeout: 20000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Auth-Token': apiKey,
  },
};

const axiosInstance: AxiosInstance = axios.create({
  ...defaultConfiguration,
  baseURL: BASE_API_URL,
});

// const setHeader = (token: string) => {
//   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// };

function get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
  return axiosInstance.get<T>(url, config);
}

function post<T>(url: string, body?: T, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
  return axiosInstance.post<T>(url, body, config);
}

function put<T>(url: string, body: T, config?: AxiosRequestConfig): Promise<any> {
  return axiosInstance.put<T>(url, body, config);
}

function remove<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
  return axiosInstance.delete<T>(url, config);
}

export const httpClient = {
  get,
  post,
  put,
  axiosInstance,
  // setHeader,
  remove,
};
