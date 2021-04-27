import axios from "axios";
import { create } from "apisauce";

const api = axios.create(
    {
      baseURL: "http://localhost:8080",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwODRjMDJmNTNiODFkMzBmNDc5ZDE1MyIsImlhdCI6MTYxOTQ4MzM4NSwiZXhwIjoxNjE5NTY5Nzg1fQ.QQ-HTtd9k8HlZMlOyKI9hZrKOHggiPv6O0R_Ngu7aAs",
      },
    }
);

export default api;
