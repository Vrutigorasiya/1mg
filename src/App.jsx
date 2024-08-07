import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "./components/Home";
import Login from "./components/Login";
import User from "./components/User";
import Rootlayout from "./components/Rootlayout";
import Dashboard from "./components/Dashboard";
<<<<<<< Updated upstream
import Productview from "./components/Productview";
import Productlist from "./components/Productlist";
// import Manufacturerlist from "./components/Manufacturerlist";
// import Manufacturerview from "./components/Manufacturerview";
// import Manufacturerupload from "./components/Manufacturerupload";
import Manufacturerview from "./components/Manufacturerview";
import Manufacturerupload from "./components/Manufacturerupload";
import Menufacturerlst from "./components/Menufacturerlst";
import Registerform from "./components/Registeform";
import Adminorder from "./components/Adminorder";



=======
import Productlist from "./pages/products/Productlist"
import Registerform from "./components/Registeform"
import Adminorder from "./pages/adminorders/Adminorder"
import Error from "./components/Error"
import Productview from "./pages/products/view/Productview";
import Productcreateform from "./pages/products/create/Productcreateform";
>>>>>>> Stashed changes

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
                    element: <Error/>,
                },
                
                {
                    path: "login",
                    element: <Login/>,
                },
                {
                    path: "register",
                    element: <Registerform/>,
                },
                {
                    path: "adminorder",
                    element: <Adminorder/>,
                },
                {
                    path: "productlist",
                    element: <Productlist/>,
                },
                {
                    path: "productcreateform",
                    element: <Productcreateform/>,
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
<<<<<<< Updated upstream
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
                    path: "manufacturerlist",
                    element: <Menufacturerlst/>,
                },
                {
                    path: "manufacturerview",
                    element: <Manufacturerview />,
                },
                {
                    path: "manufacturerupload",
                    element: <Manufacturerupload />,
                },
                {
=======
>>>>>>> Stashed changes
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
