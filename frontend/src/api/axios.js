import axios from "axios";

const API = axios.create({
  baseURL: "https://cloudelearningplatform.onrender.com"
});

export default API;