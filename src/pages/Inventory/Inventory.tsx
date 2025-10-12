import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Edit,
  Plus,
  Search,
  Trash,
  TriangleAlert,
} from "lucide-react";

export const Inventory = () => {
  return (
    <div className="flex-1 py-8">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <div className="flex min-w-72 flex-col gap-1">
          <p className="text-text-light dark:text-text-dark text-3xl font-black leading-tight tracking-[-0.03em]">
            Gestión de Inventario
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
            Administra los productos de tu botica.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-gray-500 dark:text-gray-400 flex border-none bg-white dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                <Search />
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 pl-2 text-base font-normal leading-normal"
                placeholder="Buscar por nombre de producto..."
                value=""
              />
            </div>
          </label>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-2">
            <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4">
              <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                Todos
              </p>
              <span className="material-symbols-outlined text-text-light dark:text-text-dark text-lg">
                <ChevronDown />
              </span>
            </button>
            <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4">
              <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                Bajo Stock
              </p>
            </button>
            <button className="flex h-12 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4">
              <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                Agotado
              </p>
            </button>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary gap-2 pl-4 text-base font-bold leading-normal tracking-[0.015em]">
            <Plus />
            <span className="truncate hidden sm:inline">Añadir Producto</span>
          </button>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3" scope="col">
                  Nombre del Producto
                </th>
                <th className="px-6 py-3 text-center" scope="col">
                  Cantidad en Stock
                </th>
                <th className="px-6 py-3 text-right" scope="col">
                  Precio Unitario
                </th>
                <th className="px-6 py-3 text-center" scope="col">
                  Estado
                </th>
                <th className="px-6 py-3 text-center" scope="col">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  scope="row"
                >
                  Paracetamol 500mg
                </th>
                <td className="px-6 py-4 text-center">150</td>
                <td className="px-6 py-4 text-right">$25.00</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    En Stock
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
                    <Edit />
                  </button>
                  <button className="p-2 text-danger rounded-lg hover:bg-danger/10">
                    <Trash />
                  </button>
                </td>
              </tr>
              <tr className="bg-warning/10 dark:bg-warning/20 border-b dark:border-gray-700 hover:bg-warning/20 dark:hover:bg-warning/30">
                <th
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  scope="row"
                >
                  Amoxicilina 250mg
                </th>
                <td className="px-6 py-4 text-center">18</td>
                <td className="px-6 py-4 text-right">$45.50</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 font-semibold leading-tight text-yellow-800 bg-yellow-100 rounded-full dark:bg-yellow-700 dark:text-yellow-100 flex items-center justify-center gap-1">
                    <TriangleAlert />
                    Bajo Stock
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
                    <Edit />
                  </button>
                  <button className="p-2 text-danger rounded-lg hover:bg-danger/10">
                    <Trash />
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  scope="row"
                >
                  Vendas Elásticas 10cm
                </th>
                <td className="px-6 py-4 text-center">75</td>
                <td className="px-6 py-4 text-right">$12.00</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    En Stock
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
                    <Edit />
                  </button>
                  <button className="p-2 text-danger rounded-lg hover:bg-danger/10">
                    <Trash />
                  </button>
                </td>
              </tr>
              <tr className="bg-danger/10 dark:bg-danger/20 border-b dark:border-gray-700 hover:bg-danger/20 dark:hover:bg-danger/30">
                <th
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  scope="row"
                >
                  Ibuprofeno 400mg
                </th>
                <td className="px-6 py-4 text-center">0</td>
                <td className="px-6 py-4 text-right">$30.00</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:bg-red-700 dark:text-red-100">
                    Agotado
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
                    <Edit />
                  </button>
                  <button className="p-2 text-danger rounded-lg hover:bg-danger/10">
                    <Trash />
                  </button>
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  scope="row"
                >
                  Alcohol en Gel 250ml
                </th>
                <td className="px-6 py-4 text-center">200</td>
                <td className="px-6 py-4 text-right">$18.75</td>
                <td className="px-6 py-4 text-center">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                    En Stock
                  </span>
                </td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button className="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400">
                    <Edit />
                  </button>
                  <button className="p-2 text-danger rounded-lg hover:bg-danger/10">
                    <Trash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          aria-label="Table navigation"
          className="flex items-center justify-between p-4"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Mostrando{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              1-5
            </span>{" "}
            de{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              100
            </span>
          </span>
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <a
                className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="#"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft />
              </a>
            </li>
            <li>
              <a
                aria-current="page"
                className="z-10 px-3 py-2 leading-tight bg-primary border border-primary hover:bg-primary/90"
                href="#"
              >
                1
              </a>
            </li>
            <li>
              <a
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="#"
              >
                2
              </a>
            </li>
            <li>
              <a
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="#"
              >
                ...
              </a>
            </li>
            <li>
              <a
                className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="#"
              >
                10
              </a>
            </li>
            <li>
              <a
                className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                href="#"
              >
                <span className="sr-only">Next</span>
                <ChevronRight />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
