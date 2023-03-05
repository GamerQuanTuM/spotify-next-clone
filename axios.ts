import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:1339/api/v1",
  withCredentials: true,
});
