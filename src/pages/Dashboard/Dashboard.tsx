import { Outlet } from "react-router";

export default function Dashboard() {
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
            $1,234.56
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
            8
          </p>
        </div>
      </div>
      {/* <!-- Charts --> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col gap-2 rounded-lg border border-[#d1e6d9] dark:border-gray-700 p-6 bg-white dark:bg-gray-800">
          <p className="text-[#0e1b13] dark:text-gray-300 text-base font-medium leading-normal">
            Sales
          </p>
          <p className="text-[#0e1b13] dark:text-white tracking-light text-[32px] font-bold leading-tight truncate">
            $12,345
          </p>
          <div className="flex gap-1">
            <p className="text-[#50956c] dark:text-gray-400 text-base font-normal leading-normal">
              This week
            </p>
            <p className="text-[#078829] dark:text-green-400 text-base font-medium leading-normal">
              +12.5%
            </p>
          </div>
          <div className="grid min-h-[180px] grid-flow-col gap-6 grid-rows-[1fr_auto] items-end justify-items-center px-3 mt-4">
            <div className="bg-primary/20 w-full rounded-t-sm h-30"></div>
            <p className="text-[#50956c] dark:text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">
              Mon
            </p>
            <div className="bg-primary/20 w-full rounded-t-sm h-30"></div>
            <p className="text-[#50956c] dark:text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">
              Tue
            </p>
            <div className="bg-primary/20 w-full rounded-t-sm h-30"></div>
            <p className="text-[#50956c] dark:text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">
              Wed
            </p>
            <div className="bg-primary/20 w-full rounded-t-sm h-90"></div>
            <p className="text-[#50956c] dark:text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">
              Thu
            </p>
            <div className="bg-primary/20 w-full rounded-t-sm h-60"></div>
            <p className="text-[#50956c] dark:text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">
              Fri
            </p>
            <div className="bg-primary/20 w-full rounded-t-sm h-70"></div>
            <p className="text-[#50956c] dark:text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">
              Sat
            </p>
            <div className="bg-primary/20 w-full rounded-t-sm h-20"></div>
            <p className="text-[#50956c] dark:text-gray-400 text-[13px] font-bold leading-normal tracking-[0.015em]">
              Sun
            </p>
          </div>
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
                stroke-width="3"
              ></path>
              <path
                className="stroke-current text-red-500"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke-dasharray="15, 100"
                stroke-width="3"
              ></path>
              <path
                className="stroke-current text-yellow-500"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke-dasharray="30, 100"
                stroke-dashoffset="-15"
                stroke-width="3"
              ></path>
              <path
                className="stroke-current text-primary"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke-dasharray="55, 100"
                stroke-dashoffset="-45"
                stroke-width="3"
              ></path>
            </svg>
            <div className="absolute flex flex-col items-center">
              <p className="text-[#0e1b13] dark:text-white text-3xl font-bold">
                8,765
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
