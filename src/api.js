import axios from "axios";

export const baseURL = "http://192.168.1.4:5000";

export const api = axios.create({
  baseURL,
});