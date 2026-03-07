import axios from "axios";

const API = axios.create({
  baseURL: "https://api.utune.com.ng",
});

export default API;