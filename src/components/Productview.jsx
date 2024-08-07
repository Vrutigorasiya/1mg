<<<<<<< Updated upstream
import React, { useEffect, useRef, useState } from "react";
=======

>>>>>>> Stashed changes
import medicine from "../assets/Images/medicine.jpg";
import PersonIcon from "@mui/icons-material/Person";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import CategoryIcon from "@mui/icons-material/Category";
import RateReviewIcon from "@mui/icons-material/RateReview";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import { Rating, Stack, TextareaAutosize } from "@mui/material";
import profile from "../assets/Images/01.webp";
import { styled } from "@mui/material/styles";
import LinearProgress, { linearProgressClasses } from "@mui/material/LinearProgress";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Productview = () => {
    
    const eleemntref = useRef()
    useEffect(() => {
        eleemntref.current && eleemntref.current.scrollIntoView()
    },[])
    // console.log("heyyyyy");
    

    const { id } = useParams();
    // console.log(id);

    const [data, setData] = useState({});
    // console.log(data?.m_name , "fordata");

    const productviewdata = () => {
        axios
            .get(`http://192.168.1.4:5000/productview/get-productview/${id}`)
            .then((res) => {
                setData(res.data.data?.[0] || {});
            })
            .catch((err) => {
                console.log(err);
            });
    };
   

    useEffect(() => {
        productviewdata();
    }, []);

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 4,
        borderRadius: 3,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
        },
    }));

    return (
        <div ref={eleemntref}>
                <div className="shadow bg-white mt-7 mx-3 rounded-md p-5 block md:flex lg:flex items-center justify-between">
                    <div className=" ">
                        <h5 className="text-3xl font-semibold">{data.product_title}</h5>
                    </div>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link to="/dashboard" className="inline-flex items-center text-xs font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
                                    <Link to="/productlist" className=" text-xs font-medium text-gray-700 hover:text-blue-600  dark:text-gray-400 dark:hover:text-white">
                                        Product list
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className=" text-xs font-medium text-gray-500 dark:text-gray-400">Product view</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="shadow bg-white mt-7 mx-5 rounded-md px-5 py-8 mb-5">
                    <div className="flex gap-10">
                        <div>
                            {/* <h5 className="text-lg font-medium py-4 ">Product Gallery</h5> */}
                            <div>
                                <img src={medicine} alt="abc" className=" border-2 border-dashed border-neutral-300 rounded-md w-80"></img>
                            </div>
                            <div className="mt-3 flex justify-between">
                                <img src={medicine} alt="abc" className="border-2 border-dashed border-neutral-300 rounded-md xl:max-w-[74px] max-w-[40px] w-full"></img>
                                <img src={medicine} alt="abc" className="border-2 border-dashed border-neutral-300 rounded-md xl:max-w-[74px] max-w-[40px] w-full"></img>
                                <img src={medicine} alt="abc" className="border-2 border-dashed border-neutral-300 rounded-md xl:max-w-[74px] max-w-[40px] w-full"></img>
                                <img src={medicine} alt="abc" className="border-2 border-dashed border-neutral-300 rounded-md xl:max-w-[74px] max-w-[40px] w-full"></img>
                            </div>
                        </div>
                        <div>
                            {/* <h5 className="text-lg font-medium py-4 ">Product Details</h5> */}
                            <h5 className="font-bold text-xl  ">{data.product_title}</h5>
                            <div className="flex items-center py-2">
                                <p className="pr-3 text-lg">price: ${data.product_price}</p>
                                <p className="line-through text-base">${data.product_old_price}</p>
                                <p className="ml-3 p-1 rounded text-sm bg-green-200">10% off</p>
                            </div>
                            <p className=" text-sm capitalize ">quantity: {data.product_stock_quantity}</p>
                            <div className="flex  mt-2">
                                <div className="">
                                    <div className="flex mt-2">
                                        <PersonIcon />
                                        <p className="capitalize px-1">menufacturer name</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <BrandingWatermarkIcon />
                                        <p className="capitalize px-1">brand</p>
                                    </div>
                                    <div className="flex  mt-2">
                                        <CategoryIcon />
                                        <p className="capitalize px-1 ">category</p>
                                    </div>
                                    <div className="flex  mt-2">
                                        <CategoryIcon />
                                        <p className="capitalize px-1">storage</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <RateReviewIcon />
                                        <p className="capitalize px-1 ">Ratings & Reviews</p>
                                    </div>
                                </div>
                                <div className="px-4">
                                    <p className="capitalize mt-2 ">{data.m_name}</p>
                                    <p className="capitalize mt-2 ">{data.product_brand}</p>
                                    <p className="capitalize mt-2">{data.product_products_type}</p>
                                    <p className="capitalize mt-2">{data.product_store_type}</p>
                                    <p className="capitalize mt-2 ">
                                        {" "}
                                        {data.product_rating_count} Ratings & {data.product_rating} Reviews
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <p className="">Product Description</p>
                        <p className="mt-3">{data.product_description}</p>
                    </div>
                    {/* <div className="mt-12">
                        <p className="">Ratings & Reviews</p>
                        <div className="flex mt-3 gap-3">
                            <p>5 star</p>
                            <BorderLinearProgress variant="determinate" value={75} className="w-52 mt-3" />
                            <p>(26)</p>
                        </div>
                        <div className="flex mt-3 gap-3">
                            <p>4 star</p>
                            <BorderLinearProgress variant="determinate" value={65} className="w-52 mt-3" />
                            <p>(22)</p>
                        </div>
                        <div className="flex mt-3 gap-3">
                            <p>3 star</p>
                            <BorderLinearProgress variant="determinate" value={45} className="w-52 mt-3" />
                            <p>(17)</p>
                        </div>
                        <div className="flex mt-3 gap-3">
                            <p>2 star</p>
                            <BorderLinearProgress variant="determinate" value={50} className="w-52 mt-3" />
                            <p>(10)</p>
                        </div>
                        <div className="flex mt-3 gap-3">
                            <p>1 star</p>
                            <BorderLinearProgress variant="determinate" value={35} className="w-52 mt-3" />
                            <p>(2)</p>
                        </div>
                    </div> */}
                    {/* <div className="mt-12">
                        <p>Customer reviews</p>
                        <div className="bg-stone-200 rounded-md py-5 mt-3">
                            <div className="flex px-5 items-center">
                                <img src={profile} alt="abc" className="md:w-16 w-8 rounded-full border-2 border-indigo-300 object-cover"></img>
                                <div className="pl-4 ">
                                    <p className="uppercase text-sm">Miron Mahmud</p>
                                    <p className=" text-sm">25 minutes ago!</p>
                                </div>
                            </div>
                            <div className="flex gap-10 items-center">
                                <Stack className="px-5 ">
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                                <button className="bg-slate-500 capitalize max-w-[60px] w-full rounded py-2 ">reply</button>
                            </div>
                            <p className="mt-4 px-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima,
                                adipisci natus quod magni omnis quas.
                            </p>
                        </div>
                        <div className="bg-stone-200 max-w-[850px] w-full ml-auto rounded-md py-5 mt-3">
                            <div className="flex px-5 items-center">
                                <img src={profile} alt="abc" className="md:w-16 w-8 rounded-full border-2 border-indigo-300 object-cover"></img>
                                <div className="pl-4 ">
                                    <p className="uppercase text-sm">Miron Mahmud</p>
                                    <p className=" text-sm">25 minutes ago!</p>
                                </div>
                            </div>
                            <div className="flex gap-10 items-center">
                                <Stack className="px-5 ">
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                                <button className="bg-slate-500 capitalize max-w-[60px] w-full rounded py-2 ">reply</button>
                            </div>
                            <p className="mt-4 px-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima,
                                adipisci natus quod magni omnis quas.
                            </p>
                        </div>
                        <div className="bg-stone-200  max-w-[850px] w-full ml-auto rounded-md py-5 mt-3">
                            <div className="flex px-5 items-center">
                                <img src={profile} alt="abc" className="md:w-16 w-8 rounded-full border-2 border-indigo-300 object-cover"></img>
                                <div className="pl-4 ">
                                    <p className="uppercase text-sm">Miron Mahmud</p>
                                    <p className=" text-sm">25 minutes ago!</p>
                                </div>
                            </div>
                            <div className="flex gap-10 items-center">
                                <Stack className="px-5 ">
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                                <button className="bg-slate-500 capitalize max-w-[60px] w-full rounded py-2 ">reply</button>
                            </div>
                            <p className="mt-4 px-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima,
                                adipisci natus quod magni omnis quas.
                            </p>
                        </div>
                        <div className="bg-stone-200 rounded-md py-5 mt-3">
                            <div className="flex px-5 items-center">
                                <img src={profile} alt="abc" className="md:w-16 w-8 rounded-full border-2 border-indigo-300 object-cover"></img>
                                <div className="pl-4 ">
                                    <p className="uppercase text-sm">Miron Mahmud</p>
                                    <p className=" text-sm">25 minutes ago!</p>
                                </div>
                            </div>
                            <div className="flex gap-10 items-center">
                                <Stack className="px-5 ">
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                                </Stack>
                                <button className="bg-slate-500 capitalize max-w-[60px] w-full rounded py-2 ">reply</button>
                            </div>
                            <p className="mt-4 px-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quo nostrum dolore fugiat ducimus labore debitis unde autem recusandae? Eius harum tempora quis minima,
                                adipisci natus quod magni omnis quas.
                            </p>
                        </div>
                        <div>
                            <p className="mt-8">Review Reply Form</p>
                            <TextareaAutosize
                                placeholder="write here..."
                                aria-label="minimum height"
                                minRows={5}
                                className="rounded outline-none mt-2 max-w-[945px] w-full py-3 px-3"
                                style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }}
                            />
                        </div>
                        <div>
                            <button className="capitalize bg-slate-500 w-full rounded h-12 mt-3 text-slate-50 font-medium">drop your replies</button>
                        </div>
                    </div> */}
                </div>
                <div className="shadow bg-white mx-5 rounded-md px-5 py-5 mb-5">
                    {/* <div>
                        <h5 className="font-semibold text-lg">Other Information</h5>
                        <p className="font-medium">Cash on delivery available</p>
                    </div> */}
                    <div className="my-3 py-5">
                        <h5 className="text-lg font-semibold">Manufacturer details</h5>
                        <p className="capitalize text-sm">name: {data.m_name}</p>
                        <p className="capitalize text-sm">number: {data.m_number}</p>
                        <p className="capitalize text-sm">category: {data.m_category}</p>
                    </div>
                    <div className="my-3">
                        <h5 className="text-lg font-semibold">Seller details</h5>
                        <p className="capitalize text-sm ">name: {data.seller_name}</p>
                        <p className="capitalize text-sm">number: {data.seller_s_number}</p>
                        <p className="capitalize text-sm">company name: {data.seller_company_name}</p>
                        <p className="capitalize text-sm">company number: {data.seller_company_number}</p>
                        <p className="capitalize text-sm">company address state: {data.seller_company_address_state}</p>
                        <p className="capitalize text-sm">product zone: {data.seller_product_zone}</p>
                        <p className="capitalize text-sm">category: {data.seller_buying_category}</p>
                    </div>
                </div>
        </div>
    );
};

export default Productview;
