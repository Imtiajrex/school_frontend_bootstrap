import axios from "axios";

const token = localStorage.getItem("token");
const defaultOptions = {
  baseURL: process.env.REACT_APP_BACKEND_PATH,
  headers: {
    Accept: "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  },
};

// Create instance
let Api = axios.create(defaultOptions);
Api.defaults.withCredentials = true;

export default Api;
