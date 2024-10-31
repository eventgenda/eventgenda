import axios, {
  type AxiosError,
  type AxiosInstance,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';
import Cookies from 'js-cookie';

const baseURL: string = process.env.API_URL || 'http://localhost:8081';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL,
});

const requestInterceptor = (config: InternalAxiosRequestConfig) => {
  const token = Cookies.get('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};

const responseInterceptor = (response: AxiosResponse) => {
  return response;
};

const errorInterceptor = async (error: AxiosError) => {
  const originalRequest = error.config;

  if (error.response?.status === 401 && originalRequest) {
    console.log('401 error');
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(responseInterceptor, errorInterceptor);

export default axiosInstance;
