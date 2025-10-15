import { useEffect, useState } from "react";
import { Outlet, useOutletContext } from "react-router";
import { getSales } from "@/services/salesService";
import { Sale } from "@/types/Sale";
import { AppContextType } from "@/types/AppContextType";

export default function Dashboard() {
  const [sales, setSales] = useState<Sale[]>([]);
  const { products } = useOutletContext<AppContextType>();

  // Cargar ventas al iniciar
  useEffect(() => {
    loadSales();
  }, []);

  const loadSales = async () => {
    try {
      const response: any = await getSales(); // tipo 'any' para evitar error
      setSales(response.data); // response.data es Sale[]
    } catch (error) {
      console.error("Error al cargar ventas:", error);
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
    <div>
      <p className="text-text-light dark:text-text-dark text-3xl font-black leading-tight tracking-[-0.03em]">
        Dashboard
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col gap-2 rounded-lg p-6 border border-[#d1e6d9] dark:border-gray-700 bg-white dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Today's Sales
          </p>
          <p className="text-[#0e1b13] dark:text-white tracking-light text-2xl font-bold leading-tight">
            S/.{totalToday.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 border border-[#d1e6d9] dark:border-gray-700 bg-white dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Low Stock Items
          </p>
          <p className="text-[#0e1b13] dark:text-white tracking-light text-2xl font-bold leading-tight">
            12
          </p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 border border-[#d1e6d9] dark:border-gray-700 bg-white dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Customers Served Today
          </p>
          <p className="text-[#0e1b13] dark:text-white tracking-light text-2xl font-bold leading-tight">
            {customersToday}
          </p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col gap-2 rounded-lg border border-[#d1e6d9] dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Sales
          </p>
          <p className="text-[#0e1b13] dark:text-white tracking-light text-[32px] font-bold leading-tight truncate">
            S/.{totalSales.toFixed(2)}
          </p>
          {/* Puedes agregar más info de la semana aquí */}
        </div>

        <div className="flex flex-col gap-2 rounded-lg border border-[#d1e6d9] dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Stock Levels
          </p>
          <div className="relative flex items-center justify-center min-h-[250px]">
            <svg className="size-full" viewBox="0 0 36 36">
              <path
                className="stroke-current text-gray-200 dark:text-gray-600"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeWidth={3}
              ></path>
              <path
                className="stroke-current text-red-500"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeDasharray="15, 100"
                strokeWidth={3}
              ></path>
              <path
                className="stroke-current text-yellow-500"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeDasharray="30, 100"
                strokeDashoffset="-15"
                strokeWidth={3}
              ></path>
              <path
                className="stroke-current text-primary"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                strokeDasharray="55, 100"
                strokeDashoffset="-45"
                strokeWidth={3}
              ></path>
            </svg>
            <div className="absolute flex flex-col items-center">
              <p className="text-[#0e1b13] dark:text-white text-3xl font-bold">
                {products.length}
              </p>
              <p className="text-[#50956c] dark:text-gray-400 text-sm">
                Total Items
              </p>
            </div>
          </div>
          <div className="flex justify-around mt-4">
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-[var(--primary-color)]"></div>
              <span className="text-sm text-[#0e1b13] dark:text-gray-300">
                In Stock
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-yellow-500"></div>
              <span className="text-sm text-[#0e1b13] dark:text-gray-300">
                Low Stock
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-3 rounded-full bg-red-500"></div>
              <span className="text-sm text-[#0e1b13] dark:text-gray-300">
                Out of Stock
              </span>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}
