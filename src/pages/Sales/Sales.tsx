import { useState } from "react";
import { CircleX, CreditCard, Search } from "lucide-react";
import { Product } from "@/types/Product";
import { SaleItem } from "@/types/Sale";
import { createSale } from "@/services/salesService";
import { useOutletContext } from "react-router";
import { AppContextType } from "@/types/AppContextType";

export const Sales = () => {
  const { products } = useOutletContext<AppContextType>();
  const [cart, setCart] = useState<SaleItem[]>([]);
  const [filter, setFilter] = useState("");
  const [discount, setDiscount] = useState(0);

  const handleAddToCart = (product: Product) => {
    const existing = cart.find((item) => item.product._id === product._id);
    if (existing) {
      setCart(
        cart.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, quantity: 1, price: product.price }]);
    }
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart(cart.filter((item) => item.product._id !== productId));
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );
  const tax = subtotal * 0.18;
  const total = subtotal - (subtotal * discount) / 100 + tax;

  const handleProcessSale = async () => {
    try {
      await createSale({ items: cart, discount, total });
      setCart([]);
      setDiscount(0);
      alert("Venta registrada correctamente");
    } catch (error) {
      console.error(error);
      alert("Error al procesar la venta");
    }
  };

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      <div className="p-8">
        <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
          <div className="flex flex-col gap-1">
            <p className="text-[#0e1b13] dark:text-white text-4xl font-black tracking-tight">
              Punto de Venta
            </p>
            <p className="text-[#50956c] dark:text-gray-400 text-base font-normal">
              Registre una nueva venta para un cliente.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full items-stretch rounded-lg h-full">
                  <div className="text-[#50956c] dark:text-gray-300 flex bg-[#e8f3ec] dark:bg-gray-700/50 items-center justify-center pl-4 rounded-l-lg">
                    <Search />
                  </div>
                  <input
                    type="text"
                    className="form-input flex w-full rounded-r-lg text-[#0e1b13] dark:text-white bg-[#e8f3ec] dark:bg-gray-700/50 px-4"
                    placeholder="Buscar producto por nombre o código"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  />
                </div>
              </label>
            </div>

            <div className="@container">
              <div className="flex overflow-hidden rounded-xl border border-[#d1e6d9] dark:border-gray-700 bg-background-light dark:bg-background-dark">
                <table className="w-full">
                  <thead className="bg-[#f8fbfa] dark:bg-gray-800/50">
                    <tr>
                      <th className="px-4 py-3 text-left text-[#0e1b13] dark:text-gray-300 text-sm font-medium">
                        Producto
                      </th>
                      <th className="px-4 py-3 text-left w-32">Cantidad</th>
                      <th className="px-4 py-3 text-left w-32">Precio Unit.</th>
                      <th className="px-4 py-3 text-left w-32">Subtotal</th>
                      <th className="px-4 py-3 text-center w-24">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#d1e6d9] dark:divide-gray-700">
                    {cart.map((item) => (
                      <tr key={item.product._id}>
                        <td className="px-4 py-3 text-sm font-normal text-[#0e1b13] dark:text-white">
                          {item.product.name}
                        </td>
                        <td className="px-4 py-3">
                          <input
                            type="number"
                            className="form-input w-20 rounded-md bg-[#e8f3ec] dark:bg-gray-700 text-center"
                            value={item.quantity}
                            min={1}
                            onChange={(e) =>
                              setCart(
                                cart.map((c) =>
                                  c.product._id === item.product._id
                                    ? { ...c, quantity: Number(e.target.value) }
                                    : c
                                )
                              )
                            }
                          />
                        </td>
                        <td className="px-4 py-3 text-sm font-normal text-[#50956c] dark:text-gray-400">
                          ${item.product.price.toFixed(2)}
                        </td>
                        <td className="px-4 py-3 text-sm font-normal text-[#50956c] dark:text-gray-400">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <button
                            onClick={() =>
                              handleRemoveFromCart(item.product._id)
                            }
                            className="text-danger hover:text-danger/80"
                          >
                            <CircleX />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Product List to Add */}
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {filteredProducts.map((product) => (
                  <button
                    key={product._id}
                    className="bg-green-100 dark:bg-green-700/30 px-3 py-1 rounded hover:bg-green-200"
                    onClick={() => handleAddToCart(product)}
                  >
                    {product.name} - ${product.price.toFixed(2)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-[#f8fbfa] dark:bg-gray-800/30 p-6 rounded-xl flex flex-col h-fit">
            <h3 className="text-xl font-bold text-[#0e1b13] dark:text-white mb-6">
              Resumen de Venta
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <p className="text-[#50956c] dark:text-gray-400 text-sm">
                  Subtotal
                </p>
                <p className="text-[#0e1b13] dark:text-white text-sm font-medium">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-[#50956c] dark:text-gray-400 text-sm">
                  Descuento (%)
                </p>
                <input
                  type="number"
                  className="form-input w-20 rounded-md bg-[#e8f3ec] dark:bg-gray-700 text-right"
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value))}
                />
              </div>
              <div className="flex justify-between">
                <p className="text-[#50956c] dark:text-gray-400 text-sm">
                  Impuestos (18%)
                </p>
                <p className="text-[#0e1b13] dark:text-white text-sm font-medium">
                  ${tax.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="border-t border-[#d1e6d9] dark:border-gray-700 my-4"></div>
            <div className="flex justify-between items-center mb-8">
              <p className="text-[#0e1b13] dark:text-white text-lg font-bold">
                Total
              </p>
              <p className="text-[#0e1b13] dark:text-white text-2xl font-bold">
                ${total.toFixed(2)}
              </p>
            </div>
            <div className="space-y-3">
              <button
                onClick={handleProcessSale}
                className="w-full flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-primary text-base font-bold hover:bg-primary/90 transition-colors"
              >
                <CreditCard />
                Procesar Pago
              </button>
              <button
                onClick={() => setCart([])}
                className="w-full flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-danger text-base font-bold hover:bg-danger/90 transition-colors"
              >
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
