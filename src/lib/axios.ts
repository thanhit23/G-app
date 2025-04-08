import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import Environment from 'src/utils/environment';
import Storage from 'src/utils/storage';

export class Axios {
  private instance: AxiosInstance;
  endpoint = '';

  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create({
      baseURL: Environment.API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    });

    this.instance.interceptors.request.use(
      (config) => {
        if (typeof window !== 'undefined') {
          const token = Storage.getAccessToken();
          console.log(token, 'token');

          if (token) {
            Object.assign(config.headers, {
              Authorization: `Bearer ${token}`,
            });
          }
        }

        return config;
      },
      () => {},
    );
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error && error?.response?.status === 401) {
          const event = new CustomEvent('TOKEN_EXPIRE');
          document.dispatchEvent(event);
        }
        return Promise.reject(error);
      },
    );
  }

  get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.instance.get(url, { ...config, data: {} });
  }

  post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.instance.post(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.instance.put(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<R> {
    return this.instance.delete(url, { ...config });
  }

  // key<T extends string | number | TSearch>(variable: T) {
  //   if (!this.endpoint) {
  //     throw new Error('Endpoint is not defined');
  //   }
  //   return [this.endpoint, variable] as const;
  // }
}
