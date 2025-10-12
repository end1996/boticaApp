import { ChevronLeft, ChevronRight, Plus, Search } from "lucide-react";

export const Customers = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
          <div className="flex flex-col gap-1">
            <p className="text-[#0e1b13] dark text-4xl font-black tracking-[-0.033em]">
              Gestión de Clientes
            </p>
            <p className="text-[#50956c] dark:text-gray-400 text-base font-normal">
              Añade, edita y busca clientes.
            </p>
          </div>
          <button className="flex min-w-[84px] items-center justify-center gap-2 overflow-hidden rounded-lg h-10 px-4 bg-primary dark:text-background-dark text-sm font-bold tracking-[0.015em]">
            <Plus />
            <span className="truncate">Añadir Nuevo Cliente</span>
          </button>
        </div>
        <div className="mb-6">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#50956c] dark:text-gray-400 flex border-none bg-background-light dark:bg-background-dark border dark:border-gray-700 items-center justify-center pl-4 rounded-l-lg border-r-0">
                <Search />
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b13] dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border dark:border-gray-700 bg-background-light dark:bg-background-dark h-full placeholder:text-[#50956c] dark:placeholder:text-gray-400 px-4 rounded-l-none border-l-0 pl-2 text-base font-normal"
                placeholder="Buscar cliente por nombre o contacto..."
                value=""
              />
            </div>
          </label>
        </div>
        <div className="overflow-x-auto bg-background-light dark:bg-background-dark rounded-lg border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="px-6 py-4 text-left text-[#0e1b13] dark text-sm font-medium">
                  Nombre Completo
                </th>
                <th className="px-6 py-4 text-left text-[#0e1b13] dark text-sm font-medium">
                  Teléfono de Contacto
                </th>
                <th className="px-6 py-4 text-left text-[#0e1b13] dark text-sm font-medium">
                  Correo Electrónico
                </th>
                <th className="px-6 py-4 text-left text-[#0e1b13] dark text-sm font-medium">
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-[#0e1b13] dark text-sm font-normal">
                  Ana García
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#50956c] dark:text-gray-400 text-sm font-normal">
                  555-1234
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#50956c] dark:text-gray-400 text-sm font-normal">
                  ana.garcia@email.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    className="text-primary hover:text-primary/80 mr-4"
                    href="#"
                  >
                    Editar
                  </a>
                  <a className="text-primary hover:text-primary/80" href="#">
                    Historial de Compras
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-[#0e1b13] dark text-sm font-normal">
                  Juan Pérez
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#50956c] dark:text-gray-400 text-sm font-normal">
                  555-5678
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#50956c] dark:text-gray-400 text-sm font-normal">
                  juan.perez@email.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    className="text-primary hover:text-primary/80 mr-4"
                    href="#"
                  >
                    Editar
                  </a>
                  <a className="text-primary hover:text-primary/80" href="#">
                    Historial de Compras
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-[#0e1b13] dark text-sm font-normal">
                  María Rodriguez
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#50956c] dark:text-gray-400 text-sm font-normal">
                  555-8765
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#50956c] dark:text-gray-400 text-sm font-normal">
                  maria.rodriguez@email.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    className="text-primary hover:text-primary/80 mr-4"
                    href="#"
                  >
                    Editar
                  </a>
                  <a className="text-primary hover:text-primary/80" href="#">
                    Historial de Compras
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800/50">
                <td className="px-6 py-4 whitespace-nowrap text-[#0e1b13] dark text-sm font-normal">
                  Carlos Sánchez
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#50956c] dark:text-gray-400 text-sm font-normal">
                  555-4321
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#50956c] dark:text-gray-400 text-sm font-normal">
                  carlos.sanchez@email.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    className="text-primary hover:text-primary/80 mr-4"
                    href="#"
                  >
                    Editar
                  </a>
                  <a className="text-primary hover:text-primary/80" href="#">
                    Historial de Compras
                  </a>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-[#0e1b13] dark text-sm font-normal">
                  Laura Martinez
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#50956c] dark:text-gray-400 text-sm font-normal">
                  555-9876
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#50956c] dark:text-gray-400 text-sm font-normal">
                  laura.martinez@email.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a
                    className="text-primary hover:text-primary/80 mr-4"
                    href="#"
                  >
                    Editar
                  </a>
                  <a className="text-primary hover:text-primary/80" href="#">
                    Historial de Compras
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center p-4 mt-4">
          <a
            className="flex size-10 items-center justify-center text-[#0e1b13] dark"
            href="#"
          >
            <ChevronLeft />
          </a>
          <a
            className="text-sm font-bold leading-normal flex size-10 items-center justify-center dark:text-background-dark rounded-full bg-primary"
            href="#"
          >
            1
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e1b13] dark rounded-full hover:bg-primary/20"
            href="#"
          >
            2
          </a>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e1b13] dark rounded-full hover:bg-primary/20"
            href="#"
          >
            3
          </a>
          <span className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e1b13] dark rounded-full">
            ...
          </span>
          <a
            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-[#0e1b13] dark rounded-full hover:bg-primary/20"
            href="#"
          >
            10
          </a>
          <a
            className="flex size-10 items-center justify-center text-[#0e1b13] dark"
            href="#"
          >
            <ChevronRight />
          </a>
        </div>
      </div>
    </div>
  );
};
