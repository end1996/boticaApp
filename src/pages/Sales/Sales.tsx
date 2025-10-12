import { CircleX, CreditCard, Search } from "lucide-react";

export const Sales = () => {
  return (
    // < !--Main Content-- >
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="p-8">
        {/* <!-- PageHeading --> */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
          <div className="flex flex-col gap-1">
            <p className="text-[#0e1b13] dark text-4xl font-black tracking-tight">
              Punto de Venta
            </p>
            <p className="text-[#50956c] dark:text-gray-400 text-base font-normal">
              Registre una nueva venta para un cliente.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* <!-- Left Column: Product Selection --> */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* <!-- SearchBar --> */}
            <div>
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div className="text-[#50956c] dark:text-gray-300 flex border-none bg-[#e8f3ec] dark:bg-gray-700/50 items-center justify-center pl-4 rounded-l-lg border-r-0">
                    <Search />
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-[#0e1b13] dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-[#e8f3ec] dark:bg-gray-700/50 h-full placeholder:text-[#50956c] dark:placeholder:text-gray-400 px-4 text-base font-normal"
                    placeholder="Buscar producto por nombre o código"
                    value=""
                  />
                </div>
              </label>
            </div>
            {/* <!-- Table --> */}
            <div className="@container">
              <div className="flex overflow-hidden rounded-xl border border-[#d1e6d9] dark:border-gray-700 bg-background-light dark:bg-background-dark">
                <table className="w-full">
                  <thead className="bg-[#f8fbfa] dark:bg-gray-800/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-[#0e1b13] dark:text-gray-300 text-sm font-medium">
                        Producto
                      </th>
                      <th className="px-4 py-3 text-left text-[#0e1b13] dark:text-gray-300 text-sm font-medium w-32">
                        Cantidad
                      </th>
                      <th className="px-4 py-3 text-left text-[#0e1b13] dark:text-gray-300 text-sm font-medium w-32">
                        Precio Unit.
                      </th>
                      <th className="px-4 py-3 text-left text-[#0e1b13] dark:text-gray-300 text-sm font-medium w-32">
                        Subtotal
                      </th>
                      <th className="px-4 py-3 text-center text-[#0e1b13] dark:text-gray-300 text-sm font-medium w-24">
                        Acción
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d1e6d9] dark:divide-gray-700">
                    <tr>
                      <td className="px-4 py-3 text-[#0e1b13] dark text-sm font-normal">
                        Paracetamol 500mg
                      </td>
                      <td className="px-4 py-3">
                        <input
                          className="form-input w-20 rounded-md bg-[#e8f3ec] dark:bg-gray-700 border-none text-center text-[#0e1b13] dark focus:ring-2 focus:ring-primary/50"
                          type="number"
                          value="2"
                        />
                      </td>
                      <td className="px-4 py-3 text-[#50956c] dark:text-gray-400 text-sm font-normal">
                        $5.00
                      </td>
                      <td className="px-4 py-3 text-[#50956c] dark:text-gray-400 text-sm font-normal">
                        $10.00
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button className="text-danger hover:text-danger/80">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#0e1b13] dark text-sm font-normal">
                        Amoxicilina 250mg
                      </td>
                      <td className="px-4 py-3">
                        <input
                          className="form-input w-20 rounded-md bg-[#e8f3ec] dark:bg-gray-700 border-none text-center text-[#0e1b13] dark focus:ring-2 focus:ring-primary/50"
                          type="number"
                          value="1"
                        />
                      </td>
                      <td className="px-4 py-3 text-[#50956c] dark:text-gray-400 text-sm font-normal">
                        $8.50
                      </td>
                      <td className="px-4 py-3 text-[#50956c] dark:text-gray-400 text-sm font-normal">
                        $8.50
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button className="text-danger hover:text-danger/80">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-[#0e1b13] dark text-sm font-normal">
                        Vitamina C
                      </td>
                      <td className="px-4 py-3">
                        <input
                          className="form-input w-20 rounded-md bg-[#e8f3ec] dark:bg-gray-700 border-none text-center text-[#0e1b13] dark focus:ring-2 focus:ring-primary/50"
                          type="number"
                          value="3"
                        />
                      </td>
                      <td className="px-4 py-3 text-[#50956c] dark:text-gray-400 text-sm font-normal">
                        $3.00
                      </td>
                      <td className="px-4 py-3 text-[#50956c] dark:text-gray-400 text-sm font-normal">
                        $9.00
                      </td>
                      <td className="px-4 py-3 text-center">
                        <button className="text-danger hover:text-danger/80">
                          <span className="material-symbols-outlined">
                            delete
                          </span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <!-- Right Column: Sale Summary --> */}
          <div className="bg-[#f8fbfa] dark:bg-gray-800/30 p-6 rounded-xl flex flex-col h-fit">
            <h3 className="text-xl font-bold text-[#0e1b13] dark mb-6">
              Resumen de Venta
            </h3>
            {/* <!-- DescriptionList --> */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <p className="text-[#50956c] dark:text-gray-400 text-sm">
                  Subtotal
                </p>
                <p className="text-[#0e1b13] dark text-sm font-medium">
                  $27.50
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#50956c] dark:text-gray-400 text-sm">
                  Descuento (%)
                </p>
                <input
                  className="form-input w-20 rounded-md bg-[#e8f3ec] dark:bg-gray-700 border-none text-right text-[#0e1b13] dark focus:ring-2 focus:ring-primary/50"
                  placeholder="0"
                  type="number"
                />
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#50956c] dark:text-gray-400 text-sm">
                  Impuestos (18%)
                </p>
                <p className="text-[#0e1b13] dark text-sm font-medium">$4.95</p>
              </div>
            </div>
            <div className="border-t border-[#d1e6d9] dark:border-gray-700 my-4"></div>
            <div className="flex justify-between items-center mb-8">
              <p className="text-[#0e1b13] dark text-lg font-bold">Total</p>
              <p className="text-[#0e1b13] dark text-2xl font-bold">$32.45</p>
            </div>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-primary text-base font-bold hover:bg-primary/90 transition-colors">
                <CreditCard />
                Procesar Pago
              </button>
              <button className="w-full flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-danger text-base font-bold hover:bg-danger/90 transition-colors">
                <CircleX />
                Cancelar Venta
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
