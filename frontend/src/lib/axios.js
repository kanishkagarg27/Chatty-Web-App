import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://chatty-web-app-2.onrender.com/api",  // ← your backend URL
  withCredentials: true,
});
