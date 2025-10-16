import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

interface InventoryChartProps {
  totalProducts: number;
  lowStockCount: number;
  outOfStockCount: number;
}

export default function InventoryChart({
  totalProducts,
  lowStockCount,
  outOfStockCount,
}: InventoryChartProps) {
  const inStock = totalProducts - lowStockCount - outOfStockCount;

  const data = [
    { name: "En stock", value: inStock },
    { name: "Bajo stock", value: lowStockCount },
    { name: "Sin stock", value: outOfStockCount },
  ];

  const COLORS = ["#4A934A", "#FACC15", "#EF4444"];

  return (
    <div className="relative flex flex-col items-center">
      <div className="w-full h-[300px]">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={120}
              dataKey="value"
              stroke="none"
              paddingAngle={8}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value, name) => [`${value} productos`, name]}
              contentStyle={{
                backgroundColor: "#1f2937",
                borderRadius: "8px",
                border: "none",
                color: "white",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Texto central */}
      <div className="absolute flex flex-col items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="text-[#0e1b13] dark:text-white text-3xl font-bold">
          {totalProducts}
        </p>
        <p className="dark:text-gray-400 text-sm">
          Cantidad de productos
        </p>
      </div>

      {/* Leyenda */}
      <div className="flex justify-around mt-4 w-full">
        {data.map((entry, i) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div
              className="size-3 rounded-full"
              style={{ backgroundColor: COLORS[i] }}
            ></div>
            <span className="text-sm text-[#0e1b13] dark:text-gray-300">
              {entry.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
