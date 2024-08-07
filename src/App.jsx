import "./App.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
// import Home from "./components/Home";
import Login from "./components/Login";
import User from "./components/User";
import Rootlayout from "./components/Rootlayout";
import Dashboard from "./components/Dashboard";
import Productlist from "./pages/products/Productlist";
import Registerform from "./components/Registeform";
import Adminorder from "./pages/adminorders/Adminorder";
import Error from "./components/Error";
import Productview from "./pages/products/view/Productview";
import Productcreateform from "./pages/products/create/Productcreateform";
import Menufactureruploadform from "./pages/manufacturer/create/Menufactureruploadform";

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
                    path: "error",
                    element: <Error />,
                },

                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Registerform />,
                },
                {
                    path: "adminorder",
                    element: <Adminorder />,
                },
                {
                    path: "productlist",
                    element: <Productlist/>
                },
                {
                    path: "productcreateform",
                    element: <Productcreateform />,
                },
                {
                    path: "productview",
                    children: [
                        {
                            path: ":id",
                            element: <Productview />,
                        },
                    ],
                },
                {
                    path: "manufactureruploadform",
                    element: <Menufactureruploadform />,
                },
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
