// services/saleService.ts
import axios from "@/api/axios";
import { Sale } from "@/types/Sale";

const API_URL = "http://localhost:4000/api/sales";

export const getSales = async (): Promise<Sale[]> => {
  const { data } = await axios.get(API_URL);
  return data;
};

export const createSale = async (sale: Sale) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sale),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al crear la venta");
    }

    return response.json();
  } catch (error) {
    console.error("Error en createSale:", error);
    throw error;
  }
};
