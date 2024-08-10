import { useState, useRef, useEffect } from "react";
// import HomeIcon from "@mui/icons-material/Home";
import { Box, Rating, TextareaAutosize } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { api } from "../../../api";

const Manufacturer_product_upload = () => {
    const eleemntref = useRef();
    useEffect(() => {
        eleemntref.current && eleemntref.current.scrollIntoView();
    }, []);

    const [images, setImges] = useState(["", "", "", "", ""]);

    const [selectedFile, setSelectedFile] = useState();

    const { values, handleChange, handleSubmit } = useFormik({
        initialValues: {
            product_title: "",
            brand: "",
            rating: "",
            rating_count: "",
            store_type: "",
            products_type: "",
            price: "",
            old_price: "",
            stock_quantity: "",
            description: "",
            seller_id: "",
            manufacturer_id: "",
            images: null,
        },
        onSubmit: () => {
            values.images = selectedFile;

            const formData = new FormData();
            Object.keys(values).forEach((key) => {
                formData.append(key, values[key]);
            });
            try {
                const response = api.post("/product/create-products", formData);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }

            console.log("product create forms", values);
        },
    });

    const inputRef = useRef(null);

    const handleImageclick = () => {
        inputRef.current.click();
    };
    const handleImagechange = (e, index) => {
        const file = e.target.files[0];
        images[index] = file;
        setImges([...images]);

        async (event) => {
            const file = event.target.files[0];

            const reader = new FileReader();

            reader.onloadend = async () => {
                const binaryData = reader.result;

                const formData = new FormData();
                formData.append("image", new Blob([binaryData], { type: file.type }), file.name);

                try {
                    const response = await fetch("YOUR_API_ENDPOINT", {
                        method: "POST",
                        body: formData,
                    });

                    const data = await response.json();
                    console.log("Upload successful", data);
                } catch (error) {
                    console.error("Upload error", error);
                }
            };
            setSelectedFile(file);
        };
    };

    return (
        <div ref={eleemntref}>
            <div className="container mx-auto">
                <div className="shadow-xl bg-white mt-7 mx-3 rounded-xl p-5 block md:flex lg:flex items-center justify-between">
                    <div className=" ">
                        <h5 className="text-lg font-medium"> Manufacturer Create</h5>
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
                                        Manufacturer List
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Manufacrurer Product upload</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="shadow-xl bg-white mt-7 mx-3 rounded-xl p-5">
                        <h5 className="text-lg font-medium py-4">Basic Information</h5>
                        <div className="block lg:flex md:flex gap-5">
                            <div className="w-full md:w-1/2 lg:w1/2 ">
                                <label className="uppercase text-xs">product name</label>
                                <input
                                    type="text"
                                    name="product_title"
                                    value={values.product_title}
                                    onChange={handleChange}
                                    className="rounded w-full mt-1 outline-none text-sm p-3"
                                    style={{
                                        backgroundColor: "#fafafa",
                                        border: "1px solid #0000001a",
                                    }}
                                ></input>
                            </div>
                            <div className="w-full md:w-1/2 lg:w1/2">
                                <label className="uppercase text-xs">brand name</label>
                                <input
                                    type="text"
                                    name="brand"
                                    value={values.brand}
                                    onChange={handleChange}
                                    className="rounded w-full mt-1 outline-none text-sm p-3"
                                    style={{
                                        backgroundColor: "#fafafa",
                                        border: "1px solid #0000001a",
                                    }}
                                ></input>
                            </div>
                        </div>

                        <div>
                            <label className="uppercase text-xs mt-5">Stock Quantity</label>
                            <input
                                type="number"
                                name="stock_quantity"
                                value={values.stock_quantity}
                                onChange={handleChange}
                                className="rounded outline-none mt-1 w-full p-3"
                                style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }}
                            />
                        </div>

                        <div>
                            <label className="uppercase text-xs mt-5">description</label>
                            <TextareaAutosize
                                type="text"
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                                aria-label="minimum height"
                                minRows={3}
                                className="rounded outline-none mt-1 w-full"
                                style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }}
                            />
                        </div>
                    </div>
                    <div className="shadow-xl bg-white mt-7 mx-3 rounded-xl p-5 ">
                        <h5 className="text-lg font-medium py-4">Additional Information</h5>
                        <div className="block lg:flex md:flex gap-5 mb-5">
                            <div className="w-full md:w-1/2 lg:w1/2 ">
                                <label className="uppercase text-xs">Price</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    className="rounded w-full mt-1 outline-none text-sm p-3"
                                    style={{
                                        backgroundColor: "#fafafa",
                                        border: "1px solid #0000001a",
                                    }}
                                ></input>
                            </div>
                            <div className="w-full md:w-1/2 lg:w1/2">
                                <label className="uppercase text-xs">Old Price</label>
                                <input
                                    type="number"
                                    name="old_price"
                                    value={values.old_price}
                                    onChange={handleChange}
                                    className="rounded w-full mt-1 outline-none text-sm p-3"
                                    style={{
                                        backgroundColor: "#fafafa",
                                        border: "1px solid #0000001a",
                                    }}
                                ></input>
                            </div>
                        </div>
                        <div className="block lg:flex md:flex gap-5 mb-5">
                            <div className="w-full md:w-1/2 lg:w1/2 ">
                                <label className="uppercase text-xs">Seller ID</label>
                                <input
                                    type="number"
                                    name="seller_id"
                                    value={values.seller_id}
                                    onChange={handleChange}
                                    className="rounded w-full mt-1 outline-none text-sm p-3"
                                    style={{
                                        backgroundColor: "#fafafa",
                                        border: "1px solid #0000001a",
                                    }}
                                ></input>
                            </div>
                            <div className="w-full md:w-1/2 lg:w1/2">
                                <label className="uppercase text-xs">Manufacturer ID</label>
                                <input
                                    type="number"
                                    name="manufacturer_id"
                                    value={values.manufacturer_id}
                                    onChange={handleChange}
                                    className="rounded w-full mt-1 outline-none text-sm p-3"
                                    style={{
                                        backgroundColor: "#fafafa",
                                        border: "1px solid #0000001a",
                                    }}
                                ></input>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-full md:w-1/2 lg:w-1/2">
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Product Type
                                </label>
                                <select
                                    id="countries"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="select"
                                    name="products_type"
                                    value={values.products_type}
                                    onChange={handleChange}
                                >
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/2">
                                <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Store Type
                                </label>
                                <select
                                    id="manufacturer"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="select"
                                    name="store_type"
                                    value={values.store_type}
                                    onChange={handleChange}
                                >
                                    <option selected>Choose a country</option>
                                    <option value="US">United States</option>
                                    <option value="CA">Canada</option>
                                    <option value="FR">France</option>
                                    <option value="DE">Germany</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-full md:w-1/2 lg:w-1/2 mt-7">
                                <label className="text-slate-400 " type="select" name="rating_count" value={values.rating_count} onChange={handleChange}>
                                    O Ratings & 0 Reviews
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="shadow-xl bg-white mt-7 mx-3 rounded-xl p-5 mb-3">
                        <h5 className="text-lg font-medium py-4">Product Images</h5>

                        <div className="flex gap-3 flex-wrap justify-evenly lg:flex-nowrap ">
                            {images?.map((item, index) => (
                                <div key={index} className="relative max-w-[200px] w-full h-[200px] ">
                                    {images[index] ? (
                                        <img
                                            src={URL.createObjectURL(images[index])}
                                            id="profile-pic"
                                            className="w-full h-full object-contain border-2 rounded-md border-dashed border-gray-300"
                                            onClick={handleImageclick}
                                            alt={`profile-pic-${index}`}
                                        />
                                    ) : (
                                        <img
                                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                                            id="profile-pic"
                                            className="w-full h-full object-cover border-2 rounded-md border-dashed border-gray-300"
                                            alt="default-profile-pic"
                                        />
                                    )}
                                    <input type="file" ref={inputRef} onChange={(e) => handleImagechange(e, index)} className="opacity-0 absolute inset-0 z-20" />
                                </div>
                            ))}
                        </div>

                        <div className="mt-3">
                            <button
                                type="submit"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full mt-5 uppercase mb-5"
                            >
                                submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Manufacturer_product_upload;
