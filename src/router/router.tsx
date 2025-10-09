import { createBrowserRouter } from "react-router";
import { Root } from "@/Root";
import App from "@/App";
import { Customers } from "@/pages/Customers";
import Dashboard from "@/pages/Dashboard";
import { Inventory } from "@/pages/Inventory";
import { Sales } from "@/pages/Sales";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                element: <App />,
                children: [
                    {
                        path: "dashboard",
                        element: <Dashboard />,
                    },
                    {
                        path: "inventory",
                        element: <Inventory />,
                    },
                    {
                        path: "sales",
                        element: <Sales />,
                    },
                    {
                        path: "customers",
                        element: <Customers />,
                    },
                ],
            },
        ],
    },
]);