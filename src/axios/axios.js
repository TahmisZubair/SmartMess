// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://smart-mess-backend-try2.vercel.app/api", // Your backend base URL
  withCredentials: true, // Important for sending cookies
});

export default instance;
