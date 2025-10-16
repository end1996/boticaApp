import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router";
import { getSales } from "@/services/salesService";
import { Sale } from "@/types/Sale";
import { AppContextType } from "@/types/AppContextType";
import { getLowStockProduct } from "@/services/productService";
import InventoryChart from "@components/ui/InventoryChart";

export default function Dashboard() {
  const [sales, setSales] = useState<Sale[]>([]);
  const [lowStockCount, setLowStockCount] = useState(0);
  const { products } = useOutletContext<AppContextType>();

  // Cargar ventas al iniciar
  useEffect(() => {
    loadSales();
    loadLowStockProduct();
  }, []);

  const loadSales = async () => {
    try {
      const response: any = await getSales(); // tipo 'any' para evitar error
      setSales(response.data); // response.data es Sale[]
    } catch (error) {
      console.error("Error al cargar ventas:", error);
    }
  };

  const loadLowStockProduct = async () => {
    try {
      const response = await getLowStockProduct();
      setLowStockCount(response.length);
    } catch (error) {
      console.error("Error al cargar productos con bajo stock:", error);
    }
  };

  // Total de ventas del día
  const todaySales = Array.isArray(sales)
    ? sales.filter(
        (s) =>
          s.createdAt &&
          new Date(s.createdAt).toDateString() === new Date().toDateString()
      )
    : [];

  const totalToday = todaySales.reduce((acc, s) => acc + s.total, 0);

  // Número de clientes atendidos hoy
  const customersToday = todaySales.length;

  // Total acumulado de ventas
  const totalSales = sales.reduce((acc, s) => acc + s.total, 0);

  return (
    <div className="p-8">
      <p className="mb-8 text-text-light text-4xl dark:text-text-dark font-black leading-tight tracking-[-0.03em]">
        Dashboard
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col gap-2 rounded-lg p-6 border border-green-500 dark:border-gray-700 bg-green-100 dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Ventas del Día
          </p>
          <p className="text-[#0e1b13] dark:text-white tracking-light text-2xl font-bold leading-tight">
            S/.{totalToday.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 border border-red-500 dark:border-gray-700 bg-red-100 dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Productos con Bajo Stock
          </p>
          <p className="text-[#0e1b13] dark:text-white tracking-light text-2xl font-bold leading-tight">
            {lowStockCount}
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 border border-blue-500 dark:border-gray-700 bg-blue-100 dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Clientes Atendidos Hoy
          </p>
          <p className="text-[#0e1b13] dark:text-white tracking-light text-2xl font-bold leading-tight">
            {customersToday}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col gap-2 rounded-lg border border-green-500 dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Ventas
          </p>
          <p className="text-[#0e1b13] dark:text-white tracking-light text-[32px] font-bold leading-tight truncate">
            S/.{totalSales.toFixed(2)}
          </p>
          {/* Puedes agregar más info de la semana aquí */}
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-dark dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Niveles de Inventario
          </p>
          <InventoryChart
            totalProducts={products.length}
            lowStockCount={lowStockCount}
            outOfStockCount={products.filter((p) => p.stock === 0).length}
          />
        </div>
      </div>

      <Outlet />
    </div>
  );
}
