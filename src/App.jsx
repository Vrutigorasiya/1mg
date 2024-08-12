import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import User from "./components/User";
import Rootlayout from "./components/Rootlayout";
import Dashboard from "./components/Dashboard";
import Productlist from "./pages/products/Productlist";
import Registerform from "./components/Registeform";
import Adminorder from "./pages/adminorders/Adminorder";
import Error from "./components/Error";
import Productview from "./pages/products/view/Productview";
import Menufactureruploadform from "./pages/manufacturer/create/Menufactureruploadform";
import Adminprofile from "./pages/profile/Adminprofile";
import Product_create from "./pages/products/create/Product_create";
import Menufacturerview from "./pages/manufacturer/view/Menufacturerview";
import MenufacturerList from "./pages/manufacturer/Menufacturerlist";


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
                    path: "home",
                    element: <Home />,
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
                    path: "adminprofile",
                    element: <Adminprofile />,
                },
                {
                    path: "productlist",
                    element: <Productlist />,
                },
                {
                    path: "product_createform",
                    element: <Product_create />,
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
                    path: "manufacturerlist",
                    element: <MenufacturerList />,
                },
                {
                    path: "menufacturer_view",
                    element: <Menufacturerview />,
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
