import React from "react";
import { Link } from "react-router-dom";

const Productlist = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="shadow bg-white mt-7 mx-3 rounded-md p-5 block md:flex lg:flex items-center justify-between">
                    <div className=" ">
                        <h5 className="text-lg font-medium">Product Upload</h5>
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
                                        Products
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Product upload</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                {/* heading and breadcrumb */}
                {/* <section className="flex max-w-screen-2xl md:mx-7 lg:mx-10  mt-10  justify-between border p-5 rounded-xl shadow-xl">
                    <div className="">
                        <h3 className="lg:text-lg sm:text-sm font-bold">Product List</h3>
                    </div>
                    <div>
                        <nav className="flex lg:me-5" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                                <li className="inline-flex items-center">
                                    <a href="#" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600 dark:text-gray-400 dark:hover:text-white">
                                        <svg className="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                        </svg>
                                        Dashbord
                                    </a>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <a href="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-green-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                            Products
                                        </a>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div> */}
                {/* </section> */}
                {/* user slider */}
                <section className=" mx-10 my-10 overflow-x-auto ">
                    <div className="gap-7 p-3 flex justify-between">
                        <div className="border shadow-2xl rounded-xl  min-w-72 w-1/3 bg-gradient-to-r from-green-300 to-green-200">
                            <div className="my-10 ms-16 text-white ">
                                <p className="text-xl">Total User</p>
                                <p className="text-3xl font-bold">100</p>
                            </div>
                        </div>
                        <div className="border shadow-xl rounded-xl min-w-72 w-1/3  bg-gradient-to-r from-amber-300 to-amber-200">
                            <div className="my-10 ms-16 text-white ">
                                <p className="text-xl">Total User</p>
                                <p className="text-3xl font-bold">100</p>
                            </div>
                        </div>
                        <div className="border shadow-xl rounded-xl  min-w-72 w-1/3 bg-gradient-to-r from-blue-300 to-blue-200">
                            <div className="my-10 ms-16 text-white">
                                <p className="text-xl">Total User</p>
                                <p className="text-3xl font-bold">100</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* best selling product section */}
                <section className="max-w-screen-2xl md:mx-7 lg:mx-10 my-10">
                    <div className="border rounded-xl shadow-xl p-3">
                        <div className="">
                            <h1 className="text-xl font-bold ms-5">Best Selling Products</h1>
                        </div>
                        <div className="flex ms-5 mt-7">
                            <form className="max-w-sm w-72">
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                            <form className="max-w-sm w-72 ms-5">
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                        <div>
                            <div className="relative overflow-x-auto mt-10">
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
                                                Category
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Brand
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Price
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Stock
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Order
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                rating
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Salse
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4">#525</td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Apple MacBook Pro 17
                                            </th>
                                            <td className="px-6 py-4">Silver</td>
                                            <td className="px-6 py-4">Laptop</td>
                                            <td className="px-6 py-4">$2999</td>
                                            <td className="px-6 py-4">$2999</td>
                                            <td className="px-6 py-4">$2999</td>
                                            <td className="px-6 py-4">$2999</td>
                                            <td className="px-6 py-4">$2999</td>
                                            <td className="px-6 py-4">$2999</td>
                                        </tr>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-6 py-4">#525</td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Microsoft Surface Pro
                                            </th>
                                            <td className="px-6 py-4">White</td>
                                            <td className="px-6 py-4">Laptop PC</td>
                                            <td className="px-6 py-4">$1999</td>
                                            <td className="px-6 py-4">$1999</td>
                                            <td className="px-6 py-4">$1999</td>
                                            <td className="px-6 py-4">$1999</td>
                                            <td className="px-6 py-4">$1999</td>
                                            <td className="px-6 py-4">$1999</td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <td className="px-6 py-4">#525</td>
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Magic Mouse 2
                                            </th>
                                            <td className="px-6 py-4">Black</td>
                                            <td className="px-6 py-4">Accessories</td>
                                            <td className="px-6 py-4">$99</td>
                                            <td className="px-6 py-4">$99</td>
                                            <td className="px-6 py-4">$99</td>
                                            <td className="px-6 py-4">$99</td>
                                            <td className="px-6 py-4">$99</td>
                                            <td className="px-6 py-4">$99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* pagination */}

                            <div className="flex justify-between mx-7 mt-7 ">
                                {/* <!-- Help text --> */}
                                <div className="">
                                    <span className="text-sm text-gray-700 dark:text-gray-400">
                                        Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of{" "}
                                        <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
                                    </span>
                                </div>
                                <div className="inline-flex mt-2 xs:mt-0 float-end ">
                                    {/* <!-- Buttons --> */}
                                    <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                                        </svg>
                                        Prev
                                    </button>
                                    <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                        Next
                                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Productlist;
