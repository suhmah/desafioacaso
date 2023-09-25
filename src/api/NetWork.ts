/* eslint-disable import/extensions */
/* eslint-disable no-constant-condition */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */

import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

class HttpClientLogin {
  api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://api.staging.aca.so',
      timeout: 15000,

      timeoutErrorMessage: 'Tempo limite da requisição excedido.',
    });
    this.initInterceptors();
  }

  private initInterceptors() {
    this.api.interceptors.response.use(
      async (response: AxiosResponse) => {
        return response;
      },

      async (error: AxiosError) => {
        console.log('REQUEST_FAILED MESSAGE ==>', error?.message);
        console.log('REQUEST_FAILED STATUS ==>', error.response?.status);

        const objectError = {
          error: error?.response?.data || error,
          message: error.message,
          status: error.response?.status,
        };

        console.log('REQUEST_FAILED OBJECT ERROR ==>', objectError);

        return Promise.reject(objectError);
      },
    );
  }
}

export const { api } = new HttpClientLogin();
