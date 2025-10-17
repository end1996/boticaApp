# Documentación Técnica - NovaSalud

## 📋 Tabla de Contenidos
1. [Descripción General](#descripción-general)
2. [Arquitectura del Sistema](#arquitectura-del-sistema)
3. [Stack Tecnológico](#stack-tecnológico)
4. [Estructura del Proyecto](#estructura-del-proyecto)
5. [Componentes Principales](#componentes-principales)
6. [Servicios y API](#servicios-y-api)
7. [Tipos y Modelos de Datos](#tipos-y-modelos-de-datos)
8. [Rutas y Navegación](#rutas-y-navegación)
9. [Gestión de Estado](#gestión-de-estado)
10. [Estilos y Diseño](#estilos-y-diseño)
11. [Configuración del Proyecto](#configuración-del-proyecto)

---

## 📖 Descripción General

**NovaSalud** es una aplicación web de gestión de inventario y ventas para boticas/farmacias. Permite administrar productos, controlar stock, realizar ventas y visualizar métricas del negocio en tiempo real.

### Características Principales:
- ✅ **Dashboard** con métricas en tiempo real
- 📦 **Gestión de Inventario** (CRUD completo de productos)
- 💰 **Punto de Venta** (POS) con carrito de compras
- 📊 **Visualización de datos** con gráficos
- 🔔 **Alertas de stock bajo**
- 🎨 **Modo oscuro** (dark mode)
- 📱 **Diseño responsive**

---

## 🏗️ Arquitectura del Sistema

### Arquitectura General
```
┌─────────────────────────────────────────────────┐
│                   Frontend                       │
│              (React + TypeScript)                │
│                                                   │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │Dashboard │  │Inventory │  │  Sales   │      │
│  └──────────┘  └──────────┘  └──────────┘      │
│         │              │              │          │
│         └──────────────┴──────────────┘          │
│                       │                          │
│                  ┌────▼────┐                     │
│                  │ Services │                    │
│                  └────┬────┘                     │
│                       │                          │
│                  ┌────▼────┐                     │
│                  │   API    │                    │
│                  │  (Axios) │                    │
└──────────────────┴─────┬────┴──────────────────┘
                         │
                    HTTP/REST
                         │
┌────────────────────────▼─────────────────────────┐
│                   Backend API                     │
│              (Node.js/Express)                    │
│            http://localhost:4000/api              │
└───────────────────────────────────────────────────┘
```

### Patrón de Arquitectura
- **Arquitectura por capas** (Layered Architecture)
- **Separación de responsabilidades**:
  - **Presentación**: Componentes React (UI)
  - **Lógica de Negocio**: Services
  - **Comunicación**: API Layer (Axios)
  - **Datos**: Backend API

---

## 🛠️ Stack Tecnológico

### Frontend Core
| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | 19.1.1 | Framework UI |
| **TypeScript** | ~5.9.3 | Tipado estático |
| **Vite** | 7.1.7 | Build tool y dev server |
| **React Router** | 7.9.4 | Enrutamiento SPA |

### Librerías UI/UX
| Librería | Versión | Uso |
|----------|---------|-----|
| **TailwindCSS** | 4.1.14 | Framework CSS utility-first |
| **Lucide React** | 0.545.0 | Iconos |
| **Recharts** | 3.2.1 | Gráficos y visualización |
| **React Hot Toast** | 2.6.0 | Notificaciones toast |
| **Classnames** | 2.5.1 | Gestión condicional de clases CSS |

### HTTP Client
| Librería | Versión | Uso |
|----------|---------|-----|
| **Axios** | 1.12.2 | Cliente HTTP para API REST |

### Herramientas de Desarrollo
| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| **ESLint** | 9.36.0 | Linter |
| **TypeScript ESLint** | 8.45.0 | Reglas TypeScript |
| **Autoprefixer** | 10.4.21 | Prefijos CSS |
| **PostCSS** | 8.5.6 | Procesador CSS |

---

## 📁 Estructura del Proyecto

```
botica/
├── public/                      # Archivos estáticos
├── src/
│   ├── api/                     # Configuración de clientes HTTP
│   │   └── axios.ts            # Instancia configurada de Axios
│   │
│   ├── assets/                  # Recursos estáticos (imágenes, etc.)
│   │
│   ├── components/              # Componentes reutilizables
│   │   ├── shared/             # Componentes compartidos
│   │   │   ├── cards/
│   │   │   │   └── WhiteCard.tsx
│   │   │   └── sidemenu/
│   │   │       └── SideMenu.tsx
│   │   └── ui/                 # Componentes UI específicos
│   │       └── InventoryChart.tsx
│   │
│   ├── hooks/                   # Custom hooks (vacío actualmente)
│   │
│   ├── pages/                   # Páginas/Vistas principales
│   │   ├── Dashboard/
│   │   │   └── Dashboard.tsx
│   │   ├── Inventory/
│   │   │   └── Inventory.tsx
│   │   └── Sales/
│   │       └── Sales.tsx
│   │
│   ├── router/                  # Configuración de rutas
│   │   └── router.tsx
│   │
│   ├── services/                # Servicios de API
│   │   ├── productService.ts
│   │   └── salesService.ts
│   │
│   ├── store/                   # Estado global (vacío - no usa Redux/Context)
│   │
│   ├── types/                   # Definiciones TypeScript
│   │   ├── AppContextType.ts
│   │   ├── Product.ts
│   │   └── Sale.ts
│   │
│   ├── utils/                   # Utilidades (vacío actualmente)
│   │
│   ├── App.css                  # Estilos del componente App
│   ├── App.tsx                  # Componente raíz de la aplicación
│   ├── Root.tsx                 # Componente root del router
│   ├── index.css                # Estilos globales
│   └── main.tsx                 # Punto de entrada de la aplicación
│
├── .gitignore
├── eslint.config.js             # Configuración ESLint
├── index.html                   # HTML principal
├── package.json                 # Dependencias y scripts
├── tailwind.config.js           # Configuración Tailwind
├── tsconfig.json                # Configuración TypeScript
├── tsconfig.app.json            # Config TS para la app
├── tsconfig.node.json           # Config TS para Node
└── vite.config.ts               # Configuración Vite
```

---

## 🧩 Componentes Principales

### 1. **App.tsx** (Componente Raíz)
**Ubicación**: [src/App.tsx](cci:7://file:///m:/Proyectos/botica/src/App.tsx:0:0-0:0)

**Responsabilidades**:
- Componente contenedor principal de la aplicación
- Gestiona el estado global de productos
- Carga inicial de productos desde la API
- Proporciona contexto a las rutas hijas mediante `Outlet`
- Renderiza el menú lateral ([SideMenu](cci:1://file:///m:/Proyectos/botica/src/components/shared/sidemenu/SideMenu.tsx:4:0-52:2))

**Estado Local**:
```typescript
const [products, setProducts] = useState<Product[]>([]);
```

**Contexto Compartido**:
```typescript
<Outlet context={{ products, setProducts, loadProducts }} />
```

**Estructura**:
```tsx
<div className="flex">
  <SideMenu />
  <div className="h-dvh flex-1 sm:ml-64 bg-slate-100">
    <Outlet context={{ products, setProducts, loadProducts }} />
  </div>
</div>
```

---

### 2. **Root.tsx**
**Ubicación**: [src/Root.tsx](cci:7://file:///m:/Proyectos/botica/src/Root.tsx:0:0-0:0)

**Responsabilidades**:
- Componente raíz del sistema de rutas
- Redirección automática de `/` a `/dashboard`
- Wrapper para todas las rutas de la aplicación

**Lógica**:
```typescript
if (pathname === '/') {
    return <Navigate to="/dashboard" />;
}
```

---

### 3. **SideMenu.tsx**
**Ubicación**: [src/components/shared/sidemenu/SideMenu.tsx](cci:7://file:///m:/Proyectos/botica/src/components/shared/sidemenu/SideMenu.tsx:0:0-0:0)

**Responsabilidades**:
- Menú de navegación lateral
- Enlaces a las diferentes secciones
- Resaltado de ruta activa
- Diseño responsive (oculto en móviles)

**Rutas**:
- `/dashboard` - Dashboard
- `/inventory` - Inventario
- `/sales` - Ventas

**Características**:
- Usa `NavLink` de React Router para navegación
- Estilos condicionales con `classnames`
- Iconos de Lucide React

---

### 4. **Dashboard.tsx**
**Ubicación**: [src/pages/Dashboard/Dashboard.tsx](cci:7://file:///m:/Proyectos/botica/src/pages/Dashboard/Dashboard.tsx:0:0-0:0)

**Responsabilidades**:
- Vista principal con métricas del negocio
- Muestra estadísticas en tiempo real:
  - Ventas del día
  - Productos con bajo stock
  - Clientes atendidos hoy
  - Total acumulado de ventas
- Gráfico de niveles de inventario

**Estado Local**:
```typescript
const [sales, setSales] = useState<Sale[]>([]);
const [lowStockCount, setLowStockCount] = useState(0);
```

**Contexto Consumido**:
```typescript
const { products } = useOutletContext<AppContextType>();
```

**Métricas Calculadas**:
- `todaySales`: Ventas filtradas del día actual
- `totalToday`: Suma de ventas del día
- `customersToday`: Número de ventas (clientes)
- `totalSales`: Suma total de todas las ventas

**Componentes Hijos**:
- [InventoryChart](cci:1://file:///m:/Proyectos/botica/src/components/ui/InventoryChart.tsx:8:0-82:1): Gráfico de pastel con niveles de stock

---

### 5. **Inventory.tsx**
**Ubicación**: [src/pages/Inventory/Inventory.tsx](cci:7://file:///m:/Proyectos/botica/src/pages/Inventory/Inventory.tsx:0:0-0:0)

**Responsabilidades**:
- CRUD completo de productos
- Búsqueda y filtrado de productos
- Formulario de creación/edición
- Tabla de productos con paginación
- Indicadores visuales de estado de stock

**Estado Local**:
```typescript
const [editingProduct, setEditingProduct] = useState<Product | null>(null);
const [search, setSearch] = useState("");
const [stockFilter, setStockFilter] = useState<"all" | "low" | "out">("all");
const [showForm, setShowForm] = useState(false);
const [newProduct, setNewProduct] = useState<Omit<Product, "_id">>({...});
```

**Funcionalidades**:
1. **Búsqueda**: Por nombre de producto
2. **Filtros**:
   - Todos
   - Bajo Stock (stock < alertLevel)
   - Agotado (stock === 0)
3. **Operaciones CRUD**:
   - Crear producto
   - Editar producto
   - Eliminar producto
4. **Estados de Stock**:
   - ✅ En Stock (verde)
   - ⚠️ Bajo Stock (amarillo)
   - ❌ Agotado (rojo)

**Validaciones**:
- Todos los campos son requeridos
- Precio y stock deben ser números positivos

---

### 6. **Sales.tsx**
**Ubicación**: [src/pages/Sales/Sales.tsx](cci:7://file:///m:/Proyectos/botica/src/pages/Sales/Sales.tsx:0:0-0:0)

**Responsabilidades**:
- Punto de Venta (POS)
- Gestión de carrito de compras
- Cálculo de totales, descuentos e impuestos
- Procesamiento de ventas

**Estado Local**:
```typescript
const [cart, setCart] = useState<SaleItem[]>([]);
const [filter, setFilter] = useState("");
const [discount, setDiscount] = useState(0);
```

**Funcionalidades**:
1. **Carrito de Compras**:
   - Agregar productos
   - Modificar cantidades
   - Eliminar productos
   - Vaciar carrito

2. **Cálculos**:
   ```typescript
   subtotal = Σ(precio × cantidad)
   tax = subtotal × 0.18
   total = subtotal - (subtotal × discount/100) + tax
   ```

3. **Procesamiento**:
   - Validación de carrito no vacío
   - Envío a API
   - Limpieza de carrito tras éxito
   - Notificaciones de éxito/error

**Layout**:
- **Columna Izquierda** (2/3):
  - Buscador de productos
  - Tabla de carrito
  - Lista de productos disponibles
- **Columna Derecha** (1/3):
  - Resumen de venta
  - Subtotal, descuento, impuestos
  - Total
  - Botones de acción

---

### 7. **InventoryChart.tsx**
**Ubicación**: [src/components/ui/InventoryChart.tsx](cci:7://file:///m:/Proyectos/botica/src/components/ui/InventoryChart.tsx:0:0-0:0)

**Responsabilidades**:
- Visualización gráfica del inventario
- Gráfico de pastel (donut chart)
- Leyenda con colores

**Props**:
```typescript
interface InventoryChartProps {
  totalProducts: number;
  lowStockCount: number;
  outOfStockCount: number;
}
```

**Datos del Gráfico**:
```typescript
const data = [
  { name: "En stock", value: inStock },      // Verde #4A934A
  { name: "Bajo stock", value: lowStockCount }, // Amarillo #FACC15
  { name: "Sin stock", value: outOfStockCount }  // Rojo #EF4444
];
```

**Librería**: Recharts (PieChart, Pie, Cell, ResponsiveContainer, Tooltip)

---

### 8. **WhiteCard.tsx**
**Ubicación**: [src/components/shared/cards/WhiteCard.tsx](cci:7://file:///m:/Proyectos/botica/src/components/shared/cards/WhiteCard.tsx:0:0-0:0)

**Responsabilidades**:
- Componente de tarjeta reutilizable
- Wrapper con estilos predefinidos

**Props**:
```typescript
interface Props {
  children?: React.ReactNode;
  centered?: boolean;
  className?: string;
}
```

**Uso**: Contenedor genérico para secciones de contenido

---

## 🔌 Servicios y API

### Configuración Base - [axios.ts](cci:7://file:///m:/Proyectos/botica/src/api/axios.ts:0:0-0:0)
**Ubicación**: [src/api/axios.ts](cci:7://file:///m:/Proyectos/botica/src/api/axios.ts:0:0-0:0)

```typescript
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
});

export default api;
```

**Responsabilidad**: Instancia configurada de Axios con URL base del backend

---

### Product Service - [productService.ts](cci:7://file:///m:/Proyectos/botica/src/services/productService.ts:0:0-0:0)
**Ubicación**: [src/services/productService.ts](cci:7://file:///m:/Proyectos/botica/src/services/productService.ts:0:0-0:0)

**Endpoints**:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/products` | Obtener todos los productos |
| GET | `/products/low-stock` | Productos con bajo stock |
| POST | `/products` | Crear nuevo producto |
| PUT | `/products/:id` | Actualizar producto |
| DELETE | `/products/:id` | Eliminar producto |

**Funciones**:

1. **getProducts()**
```typescript
async function getProducts(): Promise<Product[]>
```
Obtiene la lista completa de productos.

2. **getLowStockProduct()**
```typescript
async function getLowStockProduct(): Promise<Product[]>
```
Obtiene productos con stock por debajo del nivel de alerta.

3. **createProduct()**
```typescript
async function createProduct(data: Omit<Product, "_id">): Promise<Product>
```
Crea un nuevo producto.

4. **updateProduct()**
```typescript
async function updateProduct(
  productId: string, 
  data: Partial<Omit<Product, "_id">>
): Promise<Product>
```
Actualiza un producto existente.

5. **deleteProduct()**
```typescript
async function deleteProduct(productId: string): Promise<void>
```
Elimina un producto.

---

### Sales Service - [salesService.ts](cci:7://file:///m:/Proyectos/botica/src/services/salesService.ts:0:0-0:0)
**Ubicación**: [src/services/salesService.ts](cci:7://file:///m:/Proyectos/botica/src/services/salesService.ts:0:0-0:0)

**Endpoints**:

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/sales` | Obtener todas las ventas |
| POST | `/sales` | Crear nueva venta |

**Funciones**:

1. **getSales()**
```typescript
async function getSales(): Promise<Sale[]>
```
Obtiene el historial de ventas.

2. **createSale()**
```typescript
async function createSale(sale: Sale): Promise<any>
```
Registra una nueva venta. Usa `fetch` nativo en lugar de Axios.

**Nota**: Inconsistencia - [getSales](cci:1://file:///m:/Proyectos/botica/src/services/salesService.ts:6:0-9:2) usa Axios, [createSale](cci:1://file:///m:/Proyectos/botica/src/services/salesService.ts:11:0-31:2) usa fetch. Se recomienda unificar.

---

## 📊 Tipos y Modelos de Datos

### Product
**Ubicación**: [src/types/Product.ts](cci:7://file:///m:/Proyectos/botica/src/types/Product.ts:0:0-0:0)

```typescript
export interface Product {
  _id: string;           // ID único (MongoDB ObjectId)
  name: string;          // Nombre del producto
  price: number;         // Precio unitario
  stock: number;         // Cantidad en inventario
  alertLevel: number;    // Nivel de alerta de stock bajo
}
```

**Ejemplo**:
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "Paracetamol 500mg",
  "price": 12.50,
  "stock": 150,
  "alertLevel": 20
}
```

---

### Sale & SaleItem
**Ubicación**: [src/types/Sale.ts](cci:7://file:///m:/Proyectos/botica/src/types/Sale.ts:0:0-0:0)

```typescript
export interface SaleItem {
  product: Product;      // Producto vendido
  quantity: number;      // Cantidad vendida
  price: number;         // Precio al momento de la venta
}

export interface Sale {
  items: SaleItem[];     // Items de la venta
  discount: number;      // Descuento aplicado (%)
  total: number;         // Total de la venta
  createdAt?: string;    // Fecha de creación (ISO string)
}
```

**Ejemplo**:
```json
{
  "items": [
    {
      "product": { "_id": "...", "name": "Paracetamol", ... },
      "quantity": 2,
      "price": 12.50
    }
  ],
  "discount": 10,
  "total": 26.46,
  "createdAt": "2024-10-15T22:30:00.000Z"
}
```

---

### AppContextType
**Ubicación**: [src/types/AppContextType.ts](cci:7://file:///m:/Proyectos/botica/src/types/AppContextType.ts:0:0-0:0)

```typescript
export type AppContextType = {
  products: Product[];                           // Lista de productos
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>; // Setter
  loadProducts: () => Promise<void>;             // Función de recarga
};
```

**Uso**: Tipo para el contexto compartido a través de `useOutletContext`.

---

## 🛣️ Rutas y Navegación

### Configuración de Rutas - [router.tsx](cci:7://file:///m:/Proyectos/botica/src/router/router.tsx:0:0-0:0)
**Ubicación**: [src/router/router.tsx](cci:7://file:///m:/Proyectos/botica/src/router/router.tsx:0:0-0:0)

```typescript
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <App />,
        children: [
          { path: "dashboard", element: <Dashboard /> },
          { path: "inventory", element: <Inventory /> },
          { path: "sales", element: <Sales /> },
        ],
      },
    ],
  },
]);
```

### Jerarquía de Rutas

```
/
├── Root (Redirección a /dashboard)
    └── App (Layout con SideMenu)
        ├── /dashboard (Dashboard)
        ├── /inventory (Inventory)
        └── /sales (Sales)
```

### Flujo de Navegación

1. **Usuario accede a `/`**
   - [Root](cci:1://file:///m:/Proyectos/botica/src/Root.tsx:3:0-16:1) detecta pathname === '/'
   - Redirige automáticamente a `/dashboard`

2. **Usuario navega a `/dashboard`, `/inventory`, o `/sales`**
   - [Root](cci:1://file:///m:/Proyectos/botica/src/Root.tsx:3:0-16:1) renderiza `<Outlet />` (App)
   - [App](cci:1://file:///m:/Proyectos/botica/src/App.tsx:8:0-34:1) carga productos y renderiza [SideMenu](cci:1://file:///m:/Proyectos/botica/src/components/shared/sidemenu/SideMenu.tsx:4:0-52:2) + `<Outlet />`
   - El `Outlet` de App renderiza la página correspondiente

3. **Contexto Compartido**
   - [App](cci:1://file:///m:/Proyectos/botica/src/App.tsx:8:0-34:1) pasa `{ products, setProducts, loadProducts }` a sus hijos
   - Las páginas acceden al contexto con `useOutletContext<AppContextType>()`

---

## 🗂️ Gestión de Estado

### Estrategia Actual: **Prop Drilling + Outlet Context**

**No se utiliza**:
- ❌ Redux
- ❌ Context API global
- ❌ Zustand u otros state managers

**Flujo de Estado**:

```
App.tsx (Estado Global)
  ├── products: Product[]
  ├── setProducts()
  └── loadProducts()
       │
       ├─ Outlet Context ─┐
       │                   │
       ▼                   ▼
   Dashboard.tsx      Inventory.tsx      Sales.tsx
   (consume)          (consume)          (consume)
```

### Estado en App.tsx
```typescript
const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
  loadProducts();
}, []);

const loadProducts = async () => {
  try {
    const data = await getProducts();
    setProducts(data);
  } catch (error) {
    toast.error("Error al cargar productos");
  }
};
```

### Consumo en Páginas
```typescript
// En Dashboard, Inventory, Sales
const { products, setProducts, loadProducts } = useOutletContext<AppContextType>();
```

### Estados Locales por Página

**Dashboard**:
- `sales`: Historial de ventas
- `lowStockCount`: Contador de productos con bajo stock

**Inventory**:
- `editingProduct`: Producto en edición
- `search`: Término de búsqueda
- `stockFilter`: Filtro de stock (all/low/out)
- `showForm`: Visibilidad del formulario
- `newProduct`: Datos del formulario

**Sales**:
- `cart`: Carrito de compras
- `filter`: Filtro de productos
- `discount`: Descuento aplicado

---

## 🎨 Estilos y Diseño

### TailwindCSS Configuration
**Ubicación**: [tailwind.config.js](cci:7://file:///m:/Proyectos/botica/tailwind.config.js:0:0-0:0)

#### Modo Oscuro
```javascript
darkMode: "class"
```
Se activa añadiendo la clase `dark` al elemento raíz.

#### Colores Personalizados
```javascript
colors: {
  primary: "#4A934A",           // Verde principal
  "background-light": "#F8F9FA", // Fondo claro
  "background-dark": "#112117",  // Fondo oscuro
  "text-light": "#333333",       // Texto claro
  "text-dark": "#F8F9FA",        // Texto oscuro
  warning: "#FFC107",            // Amarillo advertencia
  danger: "#DC3545",             // Rojo peligro
  success: "#28A745",            // Verde éxito
}
```

#### Fuentes
```javascript
fontFamily: {
  display: ["Inter", "sans-serif"],
}
```

#### Border Radius
```javascript
borderRadius: {
  DEFAULT: "0.25rem",
  lg: "0.5rem",
  xl: "0.75rem",
  full: "9999px",
}
```

### Estilos Globales
**Ubicación**: `src/index.css`

Importa las directivas de Tailwind:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Patrón de Diseño
- **Utility-First**: Uso extensivo de clases de Tailwind
- **Responsive**: Breakpoints `sm:`, `md:`, `lg:`
- **Dark Mode**: Clases `dark:` para tema oscuro
- **Componentes Reutilizables**: [WhiteCard](cci:1://file:///m:/Proyectos/botica/src/components/shared/cards/WhiteCard.tsx:9:0-19:2), [SideMenu](cci:1://file:///m:/Proyectos/botica/src/components/shared/sidemenu/SideMenu.tsx:4:0-52:2)

### Iconos
**Librería**: Lucide React

Iconos utilizados:
- `ChartPie` - Dashboard
- `Folder` - Inventario
- `Banknote` - Ventas
- `Search` - Búsqueda
- `Plus` - Agregar
- `Edit` - Editar
- `Trash` - Eliminar
- `TriangleAlert` - Alerta
- `CircleX` - Cerrar/Cancelar
- `CreditCard` - Pago
- `ChevronLeft/Right` - Paginación

---

## ⚙️ Configuración del Proyecto

### Vite Configuration
**Ubicación**: [vite.config.ts](cci:7://file:///m:/Proyectos/botica/vite.config.ts:0:0-0:0)

```typescript
export default defineConfig({
  plugins: [
    react(),           // Plugin React con SWC
    tailwindcss()      // Plugin Tailwind
  ],
  assetsInclude: [
    "**/*.gif", "**/*.png", "**/*.jpg", 
    "**/*.jpeg", "**/*.svg"
  ],
  resolve: {
    alias: {
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@": "/src",
      "@types": "/src/types",
    },
  },
})
```

**Características**:
- **React Plugin**: Usa SWC para Fast Refresh
- **Tailwind Plugin**: Integración nativa de Tailwind v4
- **Path Aliases**: Imports absolutos con `@`

---

### TypeScript Configuration
**Ubicación**: [tsconfig.json](cci:7://file:///m:/Proyectos/botica/tsconfig.json:0:0-0:0)

```json
{
  "compilerOptions": {
    "target": "ES2023",
    "lib": ["ES2023", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": "./src",
    "paths": {
      "@components/*": ["components/*"],
      "@assets/*": ["assets/*"],
      "@types/*": ["types/*"],
      "@/*": ["*"]
    }
  }
}
```

**Características**:
- Modo estricto activado
- Detección de variables no usadas
- Path mapping para imports absolutos

---

### ESLint Configuration
**Ubicación**: [eslint.config.js](cci:7://file:///m:/Proyectos/botica/eslint.config.js:0:0-0:0)

Configuración para:
- React hooks
- React refresh
- TypeScript
- Reglas recomendadas

---

### Scripts NPM
**Ubicación**: [package.json](cci:7://file:///m:/Proyectos/botica/package.json:0:0-0:0)

```json
{
  "scripts": {
    "dev": "vite",                    // Servidor de desarrollo
    "build": "tsc -b && vite build",  // Build de producción
    "lint": "eslint .",               // Linter
    "preview": "vite preview"         // Preview del build
  }
}
```

**Comandos**:
- `npm run dev` - Inicia servidor en http://localhost:5173
- `npm run build` - Genera build optimizado en `/dist`
- `npm run lint` - Ejecuta linter
- `npm run preview` - Preview del build de producción

---

## 🔄 Flujo de Datos

### Carga Inicial
```
1. main.tsx
   └─> Renderiza <RouterProvider router={router} />

2. Router
   └─> Navega a "/" → Redirige a "/dashboard"

3. App.tsx
   ├─> useEffect(() => loadProducts())
   ├─> Llama a getProducts() (API)
   ├─> Actualiza state: setProducts(data)
   └─> Pasa contexto a <Outlet />

4. Dashboard.tsx
   ├─> useOutletContext() → Recibe products
   ├─> useEffect(() => loadSales())
   └─> Renderiza métricas
```

### Operación CRUD (Ejemplo: Crear Producto)
```
1. Inventory.tsx
   └─> Usuario llena formulario y hace submit

2. handleSubmit()
   └─> Llama a createProduct(newProduct)

3. productService.ts
   └─> POST /api/products con axios

4. Backend API
   └─> Guarda en DB y retorna producto creado

5. Inventory.tsx
   ├─> Recibe respuesta exitosa
   ├─> Llama a loadProducts() (refresca lista)
   ├─> toast.success("Producto agregado")
   └─> Resetea formulario
```

### Operación de Venta
```
1. Sales.tsx
   ├─> Usuario agrega productos al carrito
   ├─> Modifica cantidades
   └─> Aplica descuento

2. handleProcessSale()
   └─> Llama a createSale({ items, discount, total })

3. salesService.ts
   └─> POST /api/sales con fetch

4. Backend API
   ├─> Registra venta
   ├─> Actualiza stock de productos
   └─> Retorna confirmación

5. Sales.tsx
   ├─> Recibe respuesta exitosa
   ├─> Limpia carrito: setCart([])
   ├─> Resetea descuento: setDiscount(0)
   └─> toast.success("Venta registrada")
```

---

## 🚀 Instalación y Ejecución

### Requisitos Previos
- Node.js >= 18.x
- npm >= 9.x
- Backend API corriendo en `http://localhost:4000`

### Instalación
```bash
# Clonar repositorio
git clone <repo-url>
cd botica

# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev

### Planner Response

Entendido. Voy a crear un archivo de documentación técnica más conciso:

*Updated todo list*

### Planner Response

# Documentación Técnica - NovaSalud

He analizado completamente la aplicación y aquí está la documentación técnica:

## 📋 Resumen Ejecutivo

**NovaSalud** es una aplicación web SPA para gestión de inventario y ventas de boticas/farmacias, construida con React 19 + TypeScript + Vite.

## 🛠️ Stack Tecnológico

- **React** 19.1.1 - Framework UI
- **TypeScript** 5.9.3 - Tipado estático
- **Vite** 7.1.7 - Build tool
- **React Router** 7.9.4 - Enrutamiento
- **TailwindCSS** 4.1.14 - Estilos
- **Axios** 1.12.2 - Cliente HTTP
- **Recharts** 3.2.1 - Gráficos
- **React Hot Toast** 2.6.0 - Notificaciones
- **Lucide React** 0.545.0 - Iconos

## 🏗️ Arquitectura

**Patrón**: Arquitectura por capas con separación de responsabilidades

```
Frontend (React + TS)
├── Presentación (Components/Pages)
├── Lógica de Negocio (Services)
└── Comunicación (API/Axios)
     ↓ HTTP/REST
Backend API (localhost:4000/api)
```

## 📁 Estructura del Proyecto

```
src/
├── api/axios.ts              # Cliente HTTP configurado
├── components/
│   ├── shared/
│   │   ├── cards/WhiteCard.tsx
│   │   └── sidemenu/SideMenu.tsx
│   └── ui/InventoryChart.tsx
├── pages/
│   ├── Dashboard/Dashboard.tsx
│   ├── Inventory/Inventory.tsx
│   └── Sales/Sales.tsx
├── router/router.tsx
├── services/
│   ├── productService.ts
│   └── salesService.ts
├── types/
│   ├── Product.ts
│   ├── Sale.ts
│   └── AppContextType.ts
├── App.tsx                   # Componente raíz
├── Root.tsx                  # Router root
└── main.tsx                  # Entry point
```

## 🧩 Componentes Principales

### **App.tsx**
- Componente contenedor principal
- Gestiona estado global de productos
- Carga inicial desde API
- Comparte contexto vía `Outlet`

### **Dashboard.tsx**
- Métricas: ventas del día, bajo stock, clientes atendidos
- Gráfico de inventario (Recharts)
- Consume productos del contexto

### **Inventory.tsx**
- CRUD completo de productos
- Búsqueda y filtros (todos/bajo stock/agotado)
- Formulario crear/editar
- Tabla con estados visuales

### **Sales.tsx**
- Punto de Venta (POS)
- Carrito de compras
- Cálculos: subtotal, descuento (%), impuestos (18%), total
- Procesamiento de ventas

### **SideMenu.tsx**
- Navegación lateral
- NavLinks con estado activo
- Responsive (oculto en móviles)

## 🔌 Servicios API

### **productService.ts**
- [getProducts()](cci:1://file:///m:/Proyectos/botica/src/services/productService.ts:3:0-11:1) - GET /products
- [getLowStockProduct()](cci:1://file:///m:/Proyectos/botica/src/services/productService.ts:13:0-21:2) - GET /products/low-stock
- [createProduct()](cci:1://file:///m:/Proyectos/botica/src/services/productService.ts:23:0-33:1) - POST /products
- [updateProduct()](cci:1://file:///m:/Proyectos/botica/src/services/productService.ts:35:0-46:1) - PUT /products/:id
- [deleteProduct()](cci:1://file:///m:/Proyectos/botica/src/services/productService.ts:48:0-55:1) - DELETE /products/:id

### **salesService.ts**
- [getSales()](cci:1://file:///m:/Proyectos/botica/src/services/salesService.ts:6:0-9:2) - GET /sales
- [createSale()](cci:1://file:///m:/Proyectos/botica/src/services/salesService.ts:11:0-31:2) - POST /sales

## 📊 Modelos de Datos

```typescript
// Product
interface Product {
  _id: string;
  name: string;
  price: number;
  stock: number;
  alertLevel: number;
}

// Sale
interface Sale {
  items: SaleItem[];
  discount: number;
  total: number;
  createdAt?: string;
}

interface SaleItem {
  product: Product;
  quantity: number;
  price: number;
}
```

## 🛣️ Rutas

```
/ → Root (redirige a /dashboard)
  └── App (layout + SideMenu)
      ├── /dashboard → Dashboard
      ├── /inventory → Inventory
      └── /sales → Sales
```

## 🗂️ Gestión de Estado

**Estrategia**: Prop drilling + Outlet Context (sin Redux/Context API)

```typescript
// App.tsx
const [products, setProducts] = useState<Product[]>([]);
<Outlet context={{ products, setProducts, loadProducts }} />

// Páginas
const { products } = useOutletContext<AppContextType>();
```

## ⚙️ Configuración

### **vite.config.ts**
- Plugin React (SWC)
- Plugin Tailwind
- Path aliases: `@`, `@components`, `@types`

### **tailwind.config.js**
- Dark mode: class-based
- Colores custom: primary (#4A934A), backgrounds, text
- Fuente: Inter

### **tsconfig.json**
- Target: ES2023
- Strict mode
- Path mapping

## 🚀 Scripts

```bash
npm run dev      # Desarrollo (localhost:5173)
npm run build    # Build producción
npm run lint     # ESLint
npm run preview  # Preview build
```

## 📝 Notas Técnicas

1. **Estado Global**: Manejado en App.tsx, compartido vía useOutletContext
2. **API Base**: http://localhost:4000/api
3. **Inconsistencia**: salesService usa fetch y axios mezclados
4. **Validaciones**: Formularios con HTML5 + validación client-side
5. **Responsive**: Breakpoints Tailwind (sm/md/lg)
6. **Dark Mode**: Soportado con clases `dark:`

---

**Documentación generada**: Octubre 2025  
**Versión**: 1.0.0
