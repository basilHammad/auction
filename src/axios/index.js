import axios from "axios";

const fetcher = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    // "Content-Type": "application/json",
    "Content-Type": "multipart/form-data",
    // "Content-Type": "application/x-www-form-urlencoded",

    accept: "application/json",
  },
});

fetcher.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("userToken");
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

export default fetcher;
