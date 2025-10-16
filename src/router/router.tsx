import { createBrowserRouter } from "react-router";
import { Root } from "@/Root";
import App from "@/App";
import Dashboard from "@/pages/Dashboard/Dashboard";
import { Inventory } from "@/pages/Inventory/Inventory";
import { Sales } from "@/pages/Sales/Sales";

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
                ],
            },
        ],
    },
]);