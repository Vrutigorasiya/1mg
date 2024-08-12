import axios from "axios";
import  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { baseURL } from "../../api";

const MenufacturerList = () => {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");

    // Function to fetch data based on search
    const fetchManufacturers = async () => {
        try {
            const response = await axios.get(`http://192.168.1.4:5000/manufacturer/get-manufacturers?search=${search}`);
            setOrders(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Fetch data when search changes or component mounts
    useEffect(() => {
        fetchManufacturers();
    }, [search]);

    // Handler for search input change
    const searchInputHandler = (e) => {
        setSearch(e.target.value);
    };

    // Function to handle deleting an item
    const deleteData = async (id) => {
        try {
            await axios.delete(`http://192.168.1.4:5000/manufacturer/delete-manufacturers/${id}`);
            setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
        } catch (error) {
            console.error("Error deleting data:", error);
        }
    };

    return (
        <div>
            <div className="mx-auto w-full">
                <div className="shadow bg-white mt-7 mx-3 rounded-md p-5 block md:flex lg:flex items-center justify-between">
                    <div>
                        <h5 className="text-lg font-medium">Manufacturer List</h5>
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
                        </ol>
                    </nav>
                </div>

                {/* User Slider */}
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

                {/* Best Selling Product Section */}
                <section className="mx-5 my-5 !overflow-hidden ">
                    <div className="!w-full border shadow bg-white rounded-md p-5 block">
                        <div className="">
                            <h1 className="text-xl font-bold ">Best Selling Products</h1>
                        </div>
                        <div className="flex justify-between mt-3">
                            <form className="max-w-md">
                                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                                    Search
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                        </svg>
                                    </div>
                                    <input
                                        onChange={searchInputHandler}
                                        type="search"
                                        id="default-search"
                                        className="block max-w-52 w-full h-10 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search here..."
                                        required
                                    />
                                </div>
                            </form>
                            <Link to="/manufactureruploadform">
                                <button className="w-full lg:w-40  md:w-40 p-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg  dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-base">
                                    Create Menufacturer
                                </button>
                            </Link>
                        </div>

                        <div className="w-full py-4 overflow-x-auto">
                            <table className="w-full bg-white border border-gray-300 border-collapse text-sm">
                                <thead className="bg-gray-100 text-gray-600">
                                    <tr className="border-b border-gray-300">
                                        <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                            UID
                                        </th>
                                        <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                            Logo
                                        </th>
                                        <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                            Manufacturer Name
                                        </th>
                                        <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                            Manufacturer Number
                                        </th>
                                        <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                            Manufacturer Category
                                        </th>
                                        <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                            Manufacturer LIC Number
                                        </th>
                                        <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                            Email
                                        </th>
                                        <th scope="col" className="px-4 py-2 border-r border-gray-300">
                                            Manufacturer Company Name
                                        </th>
                                        <th scope="col" className="px-4 py-2">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td className="px-2 py-2 border-r border-gray-300 text-center">{order.id}</td>
                                            <td className="px-2 py-2 border-r border-gray-300 text-center">
                                                <img className="max-h-[50px] w-full" src={`${baseURL}${order.file_name}`} alt="logo" />
                                            </td>
                                            <td className="px-2 py-2 border-r border-gray-300 text-center">{order.m_name}</td>
                                            <td className="px-2 py-2 border-r border-gray-300 text-center">{order.m_number}</td>
                                            <td className="px-2 py-2 border-r border-gray-300 text-center">{order.m_category}</td>
                                            <td className="px-2 py-2 border-r border-gray-300 text-center">{order.m_lic_number}</td>
                                            <td className="px-2 py-2 border-r border-gray-300 text-center">{order.email}</td>
                                            <td className="px-2 py-2 border-r border-gray-300 text-center">{order.m_c_name}</td>
                                            <td className="px-2 py-5 gap-2 flex">
                                                {/* <Link to={`/manufacturerview/${order.product_id}`}> */}
                                                <Link to={`/menufacturer_view`}>
                                                    <VisibilityIcon className="bg-slate-300 rounded !text-xl" />
                                                </Link>
                                                <Link to="/manufactureruploadform">
                                                    <EditIcon className="bg-slate-300 rounded !text-xl" />
                                                </Link>
                                                <DeleteIcon onClick={() => deleteData(order.id)} className="bg-slate-300 rounded !text-xl" />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MenufacturerList;
