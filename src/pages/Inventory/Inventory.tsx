import {
  ChevronLeft,
  ChevronRight,
  Edit,
  Plus,
  Search,
  Trash,
  TriangleAlert,
} from "lucide-react";
import { Product } from "@/types/Product";
import { AppContextType } from "@/types/AppContextType";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "@/services/productService";
import { useOutletContext } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Inventory = () => {
  const { products, loadProducts } = useOutletContext<AppContextType>();
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [search, setSearch] = useState("");
  const [stockFilter, setStockFilter] = useState<"all" | "low" | "out">("all");
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState<Omit<Product, "_id">>({
    name: "",
    price: 0,
    stock: 0,
    alertLevel: 5,
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (editingProduct) {
        // Editar producto existente
        await updateProduct(editingProduct._id, newProduct);
        toast.success("Producto actualizado correctamente");
      } else {
        // Crear producto nuevo
        await createProduct(newProduct);
        toast.success("Producto agregado correctamente");
      }

      // Reset
      setNewProduct({ name: "", price: 0, stock: 0, alertLevel: 5 });
      setEditingProduct(null);
      setShowForm(false);
      await loadProducts();
    } catch (error) {
      console.error(error);
      toast.error("Error al guardar el producto");
    }
  };

  const handleDelete = async (productId: string) => {
    if (!toast("¿Estás seguro de eliminar este producto?")) return;
    try {
      await deleteProduct(productId);
      await loadProducts(); // Recarga productos globalmente
      toast.success("Producto eliminado correctamente");
    } catch (error) {
      console.error(error);
      toast.error("Error al eliminar el producto");
    }
  };

  const filtered = products.filter((p) => {
    // Filtro de texto
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());

    // Filtro de stock
    const matchesStock =
      stockFilter === "all"
        ? true
        : stockFilter === "low"
        ? p.stock < (p.alertLevel ?? 5) && p.stock > 0
        : p.stock === 0;

    return matchesSearch && matchesStock;
  });

  return (
    <div className="flex-1 p-8">
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
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full bg-slate-100">
              <div className="text-gray-500 dark:text-gray-400 flex border-none dark:bg-gray-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                <Search />
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary h-full placeholder:text-gray-500 dark:placeholder:text-gray-400 px-4 pl-2 text-base font-normal leading-normal"
                placeholder="Buscar por nombre de producto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </label>
        </div>

        <div className="flex gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => setStockFilter("all")}
              className={`flex h-12 items-center justify-center gap-x-2 rounded-lg border px-4 transition 
    ${
      stockFilter === "all"
        ? "bg-blue-500 text-white border-[#3b82f6]"
        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-text-light dark:text-text-dark cursor-pointer"
    }`}
            >
              Todos
            </button>

            <button
              onClick={() => setStockFilter("low")}
              className={`flex h-12 items-center justify-center gap-x-2 rounded-lg border px-4 transition 
    ${
      stockFilter === "low"
        ? "bg-yellow-400 text-black border-yellow-400"
        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-text-light dark:text-text-dark cursor-pointer"
    }`}
            >
              Bajo Stock
            </button>

            <button
              onClick={() => setStockFilter("out")}
              className={`flex h-12 items-center justify-center gap-x-2 rounded-lg border px-4 transition 
    ${
      stockFilter === "out"
        ? "bg-red-500 text-white border-red-500"
        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-text-light dark:text-text-dark cursor-pointer"
    }`}
            >
              Agotado
            </button>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex min-w-[84px] max-w-[480px] bg-slate-200 hover:bg-green-300 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary gap-2 pl-4 text-base font-bold leading-normal tracking-[0.015em]"
          >
            <Plus />
            <span className="truncate hidden sm:inline">
              {showForm ? "Cancelar" : "Añadir Producto"}
            </span>
          </button>
        </div>
      </div>

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md mb-6 max-w-3xl mx-auto border border-gray-200 dark:border-gray-700 transition-all duration-300"
        >
          <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <Plus className="w-5 h-5 text-primary" />
            {editingProduct ? "Editar Producto" : "Nuevo Producto"}
          </h3>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre del producto
              </label>
              <input
                type="text"
                placeholder="Ej: Paracetamol 500mg"
                className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-800 dark:text-gray-100"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, name: e.target.value })
                }
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Precio unitario (S/)
              </label>
              <input
                type="number"
                min="0"
                step="0.01"
                placeholder="Ej: 12.50"
                className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-800 dark:text-gray-100"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: Number(e.target.value),
                  })
                }
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Cantidad en stock
              </label>
              <input
                type="number"
                min="0"
                placeholder="Ej: 100"
                className="border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 px-3 py-2 rounded-lg w-full focus:ring-2 focus:ring-primary/50 focus:border-primary text-gray-800 dark:text-gray-100"
                value={newProduct.stock}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    stock: Number(e.target.value),
                  })
                }
                required
              />
            </div>
          </div>

          <div className="flex justify-end mt-6 gap-3">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setEditingProduct(null);
                setNewProduct({
                  name: "",
                  price: 0,
                  stock: 0,
                  alertLevel: 5,
                });
              }}
              className="px-4 py-2 rounded-lg border text-white bg-red-500 border-gray-300 dark:border-gray-600 dark:bg-gray-700 hover:bg-red-600 dark:hover:bg-gray-60 dark:text-gray-200 font-medium transition cursor-pointer"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="px-5 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition cursor-pointer"
            >
              {editingProduct ? "Guardar Cambios" : "Guardar Producto"}
            </button>
          </div>
        </form>
      )}

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 dark:text-gray-300 uppercase bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3">Nombre del Producto</th>
                <th className="px-6 py-3 text-center">Cantidad en Stock</th>
                <th className="px-6 py-3 text-right">Precio Unitario</th>
                <th className="px-6 py-3 text-center">Estado</th>
                <th className="px-6 py-3 text-center">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => {
                const stockStatus =
                  p.stock === 0
                    ? {
                        text: "Agotado",
                        bg: "bg-red-100",
                        textColor: "text-red-700",
                      }
                    : p.stock < 5
                    ? {
                        text: "Bajo Stock",
                        bg: "bg-yellow-100",
                        textColor: "text-yellow-800",
                      }
                    : {
                        text: "En Stock",
                        bg: "bg-green-100",
                        textColor: "text-green-700",
                      };

                return (
                  <tr
                    key={p._id}
                    className={`border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600`}
                  >
                    <th className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      {p.name}
                    </th>
                    <td className="px-6 py-4 text-center">{p.stock}</td>
                    <td className="px-6 py-4 text-right">S/ {p.price}</td>
                    <td className="px-6 py-4 text-center">
                      <span
                        className={`px-2 py-1 font-semibold leading-tight rounded-full dark:text-white dark:bg-opacity-70 ${stockStatus.bg} ${stockStatus.textColor} flex items-center justify-center gap-1`}
                      >
                        {p.stock < 10 && p.stock > 0 && <TriangleAlert />}
                        {stockStatus.text}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex justify-center gap-2">
                      <button
                        className="p-2 text-blue-500 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-700 dark:text-gray-400 cursor-pointer"
                        onClick={() => {
                          setNewProduct({
                            name: p.name,
                            price: p.price,
                            stock: p.stock,
                            alertLevel: p.alertLevel,
                          });
                          setEditingProduct(p);
                          setShowForm(true);
                        }}
                      >
                        <Edit />
                      </button>

                      <button
                        className="p-2 text-red-500 rounded-lg hover:bg-red-100 cursor-pointer"
                        onClick={() => handleDelete(p._id)}
                      >
                        <Trash />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Paginación simple */}
      <nav className="flex items-center justify-between p-4">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Mostrando{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-5
          </span>{" "}
          de{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {products.length}
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
  );
};
