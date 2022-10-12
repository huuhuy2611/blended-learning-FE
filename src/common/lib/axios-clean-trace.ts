import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import axiosBetterStacktrace from 'axios-better-stacktrace';

export default function axiosCleanStacktrace(axi: AxiosInstance) {
  const restoreAgent = axiosBetterStacktrace(axi);
  const interceptor = axi.interceptors.response.use(undefined, (error) => {
    delete error.request;
    if (error.response) {
      delete error.response.request;
      delete error.response.config;
    }
    return Promise.reject(error);
  });
  type EjectFn = () => void;
  const eject: EjectFn = () => {
    restoreAgent?.();
    axi.interceptors.request.eject(interceptor);
  };
  return eject;
}

export const axiCreate = (config?: AxiosRequestConfig<any>) => {
  const instance = axios.create(config);
  axiosCleanStacktrace(instance);
  return instance;
}
