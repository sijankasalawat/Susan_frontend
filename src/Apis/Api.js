import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
const config = {
  headers: {
      "authorization": `Bearer ${localStorage.getItem("token")}`,
  },
};

export const registerAPI = (data) => Api.post("/api/user/create", data);
export const loginApi=(data)=> Api.post("/api/user/login",data);
export const createProductApi =(formData)=>Api.post('/api/product/createProduct',formData,config);
export const getProductApi =()=> Api.get(`/api/product/getProduct`);
export const getProductsByUserIdApi = (userId) => Api.get(`/api/product/getProductByUserId/${userId}`, config);


export const deleteProductApi = (productId) => Api.delete(`/api/product/deleteProduct/${productId}`, config);
// forgot password
export const forgotPasswordApi = (data) =>Api.post("/api/user/forgot/password", data);
export const resetPasswordApi = (data, token) =>Api.put(`/api/user/password/reset/${token}`, data);
// export const getProductApi =(id)=>Api.get(`/api/product/get_product/${id}`)