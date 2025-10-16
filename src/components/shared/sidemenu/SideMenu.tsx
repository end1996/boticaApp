import { NavLink } from "react-router";
import classNames from "classnames";
import { Banknote, ChartPie, Folder } from "lucide-react";

export const SideMenu = () => {
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    classNames("flex items-center p-2 rounded-lg group transition-colors", {
      "bg-cyan-400 font-bold dark:bg-gray-700 text-gray-900 dark:text-white":
        isActive,
      "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700":
        !isActive,
    });
  return (
    <div>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-cyan-200 dark:bg-gray-800">
          <div className="mb-6 mt-5">
            <h1 className="text-4xl font-bold">NovaSalud</h1>
            <p className="text-gray-500 font-medium">
              Software web de gestión de inventario y venta
            </p>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <NavLink to="/dashboard" className={linkClasses}>
                <ChartPie />
                <span className="ms-3">Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/inventory" className={linkClasses}>
                <Folder />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Inventario
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/sales" className={linkClasses}>
                <Banknote />
                <span className="flex-1 ms-3 whitespace-nowrap">Ventas</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};
