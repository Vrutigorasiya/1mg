import {useEffect, useState} from "react";
import ChartComponent from "../component/ChartComponent";
import axios from "axios";

const Adminorder = () => {
    const [orders, setOrders] = useState([]);

    const orderdata = () => {
        axios
            .get("http://192.168.1.4:5000/product/get-products")
            .then((res) => {
                setOrders(res.data.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    useEffect(() => {
        orderdata();
    }, [orders]);

    return (
        <div className=" min-h-screen p-4">
            <section className="mt-10">
                <div className="mx-4 md:mx-10 gap-7 grid grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1">
                        <ChartComponent />
                    </div>
                    <div className="col-span-1">
                        <div className="border shadow-2xl rounded-xl min-w-80 bg-gradient-to-r from-green-300 to-green-200 mb-4 md:mb-0">
                            <div className="my-10 ms-16 text-white ">
                                <p className="text-xl">Total User</p>
                                <p className="text-3xl font-bold">100</p>
                            </div>
                        </div>
                        <div className="border shadow-xl rounded-xl min-w-80 bg-gradient-to-r from-amber-300 to-amber-200 mt-4 md:mt-10">
                            <div className="my-10 ms-16 text-white ">
                                <p className="text-xl">Total User</p>
                                <p className="text-3xl font-bold">100</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="border shadow-2xl rounded-xl min-w-80 bg-gradient-to-r from-green-300 to-green-200 mb-4 md:mb-0">
                            <div className="my-10 ms-16 text-white ">
                                <p className="text-xl">Total User</p>
                                <p className="text-3xl font-bold">100</p>
                            </div>
                        </div>
                        <div className="border shadow-xl rounded-xl min-w-80 bg-gradient-to-r from-amber-300 to-amber-200 mt-4 md:mt-10">
                            <div className="my-10 ms-16 text-white ">
                                <p className="text-xl">Total User</p>
                                <p className="text-3xl font-bold">100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="max-w-screen-2xl mx-4 md:mx-7 lg:mx-10 my-10">
                <div className="border rounded-xl shadow-xl p-3">
                    <div className="">
                        <h1 className="text-xl font-bold ms-5">ORDERS</h1>
                    </div>
                    <div className="flex flex-col md:flex-row ms-5 mt-7">
                        <form className="max-w-sm w-full md:w-72 mb-4 md:mb-0 md:mr-5">
                            <label
                                htmlFor="showby"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                SHOW BY
                            </label>
                            <select
                                id="showby"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>None</option>
                                <option value="v1">value 1</option>
                                <option value="v2">value 2</option>
                                <option value="v3">value 3</option>
                                <option value="v4">value 4</option>
                            </select>
                        </form>
                        <form className="max-w-sm w-full md:w-72">
                            <label
                                htmlFor="categoryby"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                CATEGORY BY
                            </label>
                            <select
                                id="categoryby"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option selected>None</option>
                                <option value="v5">value 1</option>
                                <option value="v6">value 2</option>
                                <option value="v7">value 3</option>
                                <option value="v8">value 4</option>
                            </select>
                        </form>
                    </div>
                    <div className="mt-10">
                        <div className="relative overflow-x-auto">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="px-6 py-3">
                                            UID
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Brand
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Rating
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Rating count
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Store Type
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Old Price
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Stock Quantity
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                {orders.map((value, index) => {
                                    <tbody key={index}>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4">{value.id}</td>
                                            <th
                                                scope="row"
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                            >
                                                {value.product_title}
                                            </th>
                                            <td className="px-6 py-4">{value.brand}</td>
                                            <td className="px-6 py-4">{value.rating}</td>
                                            <td className="px-6 py-4">{value.rating_count}</td>
                                            <td className="px-6 py-4">{value.store_type}</td>
                                            <td className="px-6 py-4">{value.products_type}</td>
                                            <td className="px-6 py-4">${value.price}</td>
                                            <td className="px-6 py-4">{value.old_price}</td>
                                            <td className="px-6 py-4">{value.stock_quantity}</td>
                                        </tr>
                                    </tbody>;
                                })}

                                
                            </table>
                        </div>
                        {/* pagination */}
                        <div className="flex flex-col md:flex-row justify-between mx-7 mt-7">
                            {/* <!-- Help text --> */}
                            <div className="mb-4 md:mb-0">
                                <span className="text-sm text-gray-700 dark:text-gray-400">
                                    Showing{" "}
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        1
                                    </span>{" "}
                                    to{" "}
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        10
                                    </span>{" "}
                                    of{" "}
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        100
                                    </span>{" "}
                                    Entries
                                </span>
                            </div>
                            <div className="inline-flex">
                                {/* <!-- Buttons --> */}
                                <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    <svg
                                        className="w-3.5 h-3.5 me-2 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 5H1m0 0 4 4M1 5l4-4"
                                        />
                                    </svg>
                                    Prev
                                </button>
                                <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                    Next
                                    <svg
                                        className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5h12m0 0L9 1m4 4L9 9"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Adminorder;



