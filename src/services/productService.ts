import { Product } from "@/types/Product";

const API_URL = "http://localhost:4000/api/products"; // ajusta el puerto si es diferente

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Error al obtener productos");
  return response.json();
}

export async function createProduct(data: Omit<Product, "_id">): Promise<Product> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error al crear producto");
  return response.json();
}
