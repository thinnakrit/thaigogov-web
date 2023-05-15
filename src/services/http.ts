import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { v4 as uuid } from 'uuid';
//
class Http {
  private instance: AxiosInstance | null = null;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  initHttp() {
    const http = axios.create();

    http.interceptors.request.use(
      (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
        let gen_uuid = uuid();
        config.headers['rqUid'] = gen_uuid;
        config.headers['X-Correlation-Id'] = gen_uuid;
        config.headers['ngrok-skip-browser-warning'] = 40;
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );

    http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.instance = http;
    return http;
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: InternalAxiosRequestConfig
  ) {
    try {
      return this.http.get<T, R>(url, config);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig
  ): Promise<R> {
    try {
      return this.http.post<T, R>(url, data, config);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: any,
    config?: InternalAxiosRequestConfig
  ): Promise<R> {
    try {
      return this.http.put<T, R>(url, data, config);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: InternalAxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }
}

export const httpClient = new Http();
