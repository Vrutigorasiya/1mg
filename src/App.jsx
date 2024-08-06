import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import User from "./components/User";
import Rootlayout from "./components/Rootlayout";
import Productupload from "./components/Productupload";
import Dashboard from "./components/Dashboard";
import Productview from "./components/Productview";
import Productlist from "./components/Productlist";
// import Manufacturerlist from "./components/Manufacturerlist";
// import Manufacturerview from "./components/Manufacturerview";
// import Manufacturerupload from "./components/Manufacturerupload";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Rootlayout />,
            children: [
                {
                    path: "dashboard",
                    element: <Dashboard />,
                },
                {
                    path: "productlist",
                    element: <Productlist />,
                },
                {
                    path: "productview",
                    children: [
                        {
                            path:":id",
                            element: <Productview />,
                        }
                    ]
                },
                {
                    path: "productupload",
                    element: <Productupload />,
                },
                // {
                //     path: "manufacturerlist",
                //     element: <Manufacturerlist />,
                // },
                // {
                //     path: "manufacturerview",
                //     element: <Manufacturerview />,
                // },
                // {
                //     path: "manufacturerupload",
                //     element: <Manufacturerupload />,
                // },
                {
                    path: "user",
                    children: [
                        {
                            path: ":username",
                            element: <User />,
                        },
                    ],
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
