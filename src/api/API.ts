import axios from "axios";
import { API_URL } from "./apiURL";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const API = {
  post: <T>(
    endpoint: string,
    data?: unknown,
    params?: Record<string, unknown>,
  ) =>
    apiClient.post<T>(endpoint, data, { params }).then((result) => ({
      isSuccess: result.status >= 200 && result.status < 300,
      data: result.data,
    })),
};
