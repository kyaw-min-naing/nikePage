import axios from "axios";

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string;
  discountPercentage: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

const API = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await API.get("/products");
  return response.data;
};
