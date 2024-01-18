import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerAPI = (data) => Api.post("/api/user/create", data);
export const loginApi=(data)=> Api.post("/api/user/login",data);
export const createProductApi =(formData)=>Api.post('/api/product/create',formData)
// export const getProductApi =(id)=>Api.get(`/api/product/get_product/${id}`)