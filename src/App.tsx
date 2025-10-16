import "./App.css";
import { Product } from "@/types/Product";
import { SideMenu } from "@/components/shared/sidemenu/SideMenu";
import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { getProducts } from "./services/productService";
import toast from "react-hot-toast";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  // Cargar productos al iniciar
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (error) {
      toast.error("Error al cargar productos" + error);
    }
  };

  return (
    <div className="flex">
      <SideMenu />
      <div className="h-dvh flex-1 sm:ml-64 bg-slate-100">
        {/* Outlet con contexto compartido */}
        <Outlet context={{ products, setProducts, loadProducts }} />
      </div>
    </div>
  );
}

export default App;
