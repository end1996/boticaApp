import api from "@/api/axios";
import { Product } from "@/types/Product"; // ajusta el puerto si es diferente

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await api.get("/products");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo los productos:", error);
    throw error;
  }
}

export const getLowStockProduct = async (): Promise<Product[]> => {
  try {
    const response = await api.get("/products/low-stock");
    return response.data;
  } catch (error) {
    console.error("Error obteniendo productos con bajo stock:", error);
    throw error;
  }
};

export async function createProduct(
  data: Omit<Product, "_id">
): Promise<Product> {
  try {
    const response = await api.post("/products", data);
    return response.data;
  } catch (error) {
    console.error("Error creando el producto:", error);
    throw error;
  }
}
