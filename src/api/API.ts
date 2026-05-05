import axios from "axios";
import { API_URL } from "./apiURL";

const apiClient = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const API = {
  post: <T>(endpoint: string, data: unknown) =>
    apiClient.post<T>(endpoint, data).then((res) => res.data),
};
