import axios from 'axios';
import { create } from "apisauce";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    
  },
});

export default api;
