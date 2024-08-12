import { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import axios from "axios";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { baseURL } from "../api";

const Dashboard = () => {
    const [orders, setOrders] = useState([]);

    console.log(orders, "ordersss");
    const orderdata = () => {
        axios
            .get("http://192.168.1.4:5000/product/get-products")
            .then((res) => {
                setOrders(res.data.data);

                // console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
                return;
            });
    };

    useEffect(() => {
        orderdata();
    }, []);

    const data = [
        { value: 26.7, label: "2013" },
        { value: 25.9, label: "2014" },
        { value: 17, label: "2015" },
        { value: 30.3, label: "2016" },
    ];

    const size = {
        width: 300,
        height: 170,
    };

    return (
        <>
            <div className="my-10 mx-5">
                <div className="flex gap-4 ">
                    <div className="gap-3 grid grid-cols-2 w-full">
                        <div className="flex text-white justify-around border shadow rounded-xl  max-w-96 w-full  bg-gradient-to-r from-green-600 to-green-300">
                            <div className=" mt-5 ">
                                <div>
                                    <p className="text-xl">Total User</p>
                                    <p className="text-3xl font-bold">277</p>
                                </div>
                                <div className="">
                                    <p className="text-base mt-5">last month</p>
                                </div>
                            </div>
                            <div className="mt-5 ">
                                <div className="bg-green-600 p-1 rounded-md">
                                    <AccountCircleIcon className="!text-4xl" />
                                </div>
                                <div className="">
                                    <MoreVertIcon className="mt-9" />
                                </div>
                            </div>
                        </div>
                        <div className="flex text-white justify-around border shadow rounded-xl max-w-96 w-full  bg-gradient-to-r from-violet-600 to-violet-300">
                            <div className=" mt-5 ">
                                <div>
                                    <p className="text-xl">Total User</p>
                                    <p className="text-3xl font-bold">277</p>
                                </div>
                                <div className="">
                                    <p className="text-base mt-5">last month</p>
                                </div>
                            </div>
                            <div className="mt-5 ">
                                <div className="bg-violet-600 p-1 rounded-md">
                                    <ShoppingCartIcon className="!text-4xl" />
                                </div>
                                <div className="">
                                    <MoreVertIcon className="mt-9" />
                                </div>
                            </div>
                        </div>
                        <div className="flex text-white justify-around border shadow rounded-xl max-w-96 w-full  bg-gradient-to-r from-sky-600 to-sky-300">
                            <div className=" mt-5 ">
                                <div>
                                    <p className="text-xl">Total User</p>
                                    <p className="text-3xl font-bold">277</p>
                                </div>
                                <div className="">
                                    <p className="text-base mt-5">last month</p>
                                </div>
                            </div>
                            <div className="mt-5 ">
                                <div className="bg-sky-600 p-1 rounded-md">
                                    <ShoppingBagIcon className="!text-4xl" />
                                </div>
                                <div className="">
                                    <MoreVertIcon className="mt-9" />
                                </div>
                            </div>
                        </div>{" "}
                        <div className="flex text-white justify-around border shadow rounded-xl max-w-96 w-full  bg-gradient-to-r from-amber-500 to-amber-300">
                            <div className=" mt-5 ">
                                <div>
                                    <p className="text-xl">Total User</p>
                                    <p className="text-3xl font-bold">277</p>
                                </div>
                                <div className="">
                                    <p className="text-base mt-5">last month</p>
                                </div>
                            </div>
                            <div className="mt-5 ">
                                <div className="bg-amber-500 p-1 rounded-md">
                                    <AccountCircleIcon className="!text-4xl" />
                                </div>
                                <div className="">
                                    <MoreVertIcon className="mt-9" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="border shadow-xl rounded-xl max-w-96 w-full min-h-80 bg-sky-600">
                            <div className=" text-white m-4">
                                <p className="text-xl">Total Sales</p>
                                <p className="text-3xl font-bold">$5,254,541.00</p>
                                <p>$3,578.90 in last month</p>
                                <div className="mt-5">
                                    <PieChart
                                        series={[
                                            {
                                                arcLabel: (item) => ` ${item.value}%`,
                                                arcLabelMinAngle: 45,
                                                data,
                                            },
                                        ]}
                                        sx={{
                                            [`& .${pieArcLabelClasses.root}`]: {
                                                fill: "white",
                                                fontWeight: "bold",
                                            },
                                        }}
                                        {...size}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-5 my-5 !overflow-hidden ">
                <div className="!w-full border shadow bg-white rounded-md p-5 block">
                    <div className="">
                        <h1 className="text-xl font-bold ">Best Selling Products</h1>
                    </div>
                    <div className="flex  mt-4">
                        <form className="max-w-sm w-72">
                            <label htmlFor="showby" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                SHOW BY
                            </label>
                            <select
                                id="showby"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue=""
                            >
                                <option value="">None</option>
                                <option value="v1">value 1</option>
                                <option value="v2">value 2</option>
                                <option value="v3">value 3</option>
                                <option value="v4">value 4</option>
                            </select>
                        </form>
                        <form className="max-w-sm w-72 ms-5">
                            <label htmlFor="categoryby" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                CATEGORY BY
                            </label>
                            <select
                                id="categoryby"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                defaultValue=""
                            >
                                <option value="">None</option>
                                <option value="v5">value 1</option>
                                <option value="v6">value 2</option>
                                <option value="v7">value 3</option>
                                <option value="v8">value 4</option>
                            </select>
                        </form>
                    </div>
                    <div className="w-full py-4 overflow-x-auto">
                        <table className="w-full bg-white border border-gray-300 border-collapse text-sm">
                            <thead className="bg-gray-100 text-gray-600">
                                <tr className="border-b border-gray-300">
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                        UID
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                        Title
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                        Brand
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                        Rating
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                        Category
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                        Price
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                        Stock Quantity
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                        Product Image
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                        Seller Company Name
                                    </th>
                                    <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                        Manufacturer Name
                                    </th>
                                    <th scope="col" className="px-4 py-2">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((value, index) => (
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <td className="px-2 py-2 border-r border-gray-300 text-center">{value.product_id}</td>
                                        <td className="px-2 py-2 border-r border-gray-300 ">{value.product_title}</td>
                                        <td className="px-2 py-2 border-r border-gray-300">{value.product_brand}</td>
                                        <td className="px-2 py-2 border-r border-gray-300 text-center">{value.product_rating}</td>
                                        <td className="px-2 py-2 border-r border-gray-300">{value.product_products_type}</td>
                                        <td className="px-2 py-2 border-r border-gray-300 text-center">${value.product_price}</td>
                                        <td className="px-2 py-2 border-r border-gray-300 text-center">{value.product_stock_quantity}</td>
                                        <td className="px-2 py-2 border-r border-gray-300">
                                            <img src={`${baseURL}${value.product_images_path[0]}`} alt="abc" className="w-12 h-12 object-cover block mx-auto" />
                                        </td>
                                        <td className="px-2 py-2 border-r border-gray-300">{value.seller_company_name}</td>
                                        <td className="px-2 py-2 border-r border-gray-300">{value.m_name}</td>
                                        <td className="px-2 py-5 gap-2 flex">
                                            <Link to={`/productview/${value.product_id}`}>
                                                <VisibilityIcon className="bg-slate-300 rounded !text-xl" />
                                            </Link>
                                            <EditIcon className="bg-slate-300 rounded !text-xl" />
                                            <DeleteIcon className="bg-slate-300 rounded !text-xl" />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
