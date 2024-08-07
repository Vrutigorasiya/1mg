import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const Productlist = () => {
    const [orders, setOrders] = useState([]);

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
    // console.log(orders,"ordersss");

    useEffect(() => {
        orderdata();
    }, []);

    return (
        <>
            <div className="mx-auto w-full">
                <div className="shadow bg-white mt-7 mx-3 rounded-md p-5 block md:flex lg:flex items-center justify-between">
                    <div className=" ">
                        <h5 className="text-lg font-medium">Product list</h5>
                    </div>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link to="/dashboard" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <Link to="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                        Product list
                                    </Link>
                                </div>
                            </li>
                            {/* <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Product upload</span>
                                </div>
                            </li> */}
                        </ol>
                    </nav>
                </div>
                {/* user slider */}
                <section className="my-10 overflow-x-auto">
                    <div className="gap-7 p-3 flex overflow-x-auto">
                        <div className="border shadow rounded-xl min-w-72 w-1/3 bg-gradient-to-r from-green-300 to-green-200">
                            <div className="my-10 ms-16 text-white ">
                                <p className="text-xl">Total User</p>
                                <p className="text-3xl font-bold">100</p>
                            </div>
                        </div>
                        <div className="border shadow-xl rounded-xl min-w-72 w-1/3 bg-gradient-to-r from-amber-300 to-amber-200">
                            <div className="my-10 ms-16 text-white ">
                                <p className="text-xl">Total User</p>
                                <p className="text-3xl font-bold">100</p>
                            </div>
                        </div>
                        <div className="border shadow-xl rounded-xl min-w-72 w-1/3 bg-gradient-to-r from-blue-300 to-blue-200">
                            <div className="my-10 ms-16 text-white">
                                <p className="text-xl">Total User</p>
                                <p className="text-3xl font-bold">100</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* best selling product section */}
                <section className="mx-5 my-5 !overflow-hidden ">
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
                                                <img src={value.product_images} alt="abc" className="w-12 h-12 object-cover" />
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
                </section>
            </div>
        </>
    );
};

export default Productlist;
