import axios from "axios";

export const api = axios.create({
  baseURL: "https://login-production-f274.up.railway.app",
});
