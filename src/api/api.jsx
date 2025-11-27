import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://13.61.105.87:3000", 
  withCredentials:true,
});

export default api;
