import axios from "axios";

export const api = axios.create({
  baseURL: "http://fc48-techtrio-growmer-production.up.railway.app",
});
