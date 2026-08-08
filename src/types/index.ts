/** Tipos TypeScript compartidos entre las capas de la app. */

/** Envoltura genérica de respuesta de la API. */
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

/** Error normalizado que rechaza el cliente axios. */
export interface ApiError {
  status?: number;
  message: string;
  details?: unknown;
}
