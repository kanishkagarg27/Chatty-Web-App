import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://chatty-app-hbq5.onrender.com",
  withCredentials: true,
});
