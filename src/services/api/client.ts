import axios, {AxiosError, type InternalAxiosRequestConfig} from 'axios';

import {API_BASE_URL, REQUEST_TIMEOUT} from '@/constants';
import {getTokens} from '@/services/storage';
import type {ApiError} from '@/types';

/**
 * Cliente HTTP base de la app.
 * - Request: adjunta el token de acceso (Bearer) a cada petición.
 * - Response: normaliza los errores a ApiError para consumirlos de forma consistente.
 */
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: REQUEST_TIMEOUT,
  headers: {'Content-Type': 'application/json'},
});

apiClient.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const tokens = await getTokens();
  if (tokens?.accessToken) {
    config.headers.Authorization = `Bearer ${tokens.accessToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const data = error.response?.data as {message?: string} | undefined;
    const apiError: ApiError = {
      status: error.response?.status,
      message: data?.message ?? error.message ?? 'Error de red inesperado',
    };
    return Promise.reject(apiError);
  },
);

export default apiClient;
