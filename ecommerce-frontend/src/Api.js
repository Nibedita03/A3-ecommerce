import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // backend running on 5000
});

export const fetchProducts = () => API.get("/products");
export const fetchProductById = (id) => API.get(`/products/${id}`);
export const addToCart = (data) => API.post("/cart", data);
export const getCart = () => API.get("/cart");
export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
