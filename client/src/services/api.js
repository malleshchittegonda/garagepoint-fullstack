import axios from "axios";

const API = axios.create({
  baseURL: "https://garagepoint-backend.onrender.com/api",
});

export default API;