import React from "react";
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

const Productview = () => {
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
        <>
            <div>
                <div className="shadow bg-white mt-7 mx-5 rounded-md h-16 flex items-center justify-between px-5">
                    <div>
                        <h5 className="text-lg font-medium ">Product View</h5>
                    </div>
                    <nav class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li class="inline-flex items-center">
                                <a href="/dashboard" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                    <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <div class="flex items-center">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <a href="#" class=" text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                        Products
                                    </a>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div class="flex items-center">
                                    <svg class="rtl:rotate-180 w-3 h-3 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span class=" text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Product view</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="shadow bg-white mt-7 mx-5 rounded-md px-5 pb-10 mb-5">
                    <div className="flex gap-10">
                        <div>
                            <h5 className="text-lg font-medium py-4 ">Product Gallery</h5>
                            <div>
                                <img src={medicine} className=" border-2 border-dashed border-neutral-300 rounded-md w-80"></img>
                            </div>
                            <div className="mt-3 flex justify-between">
                                <img src={medicine} className="border-2 border-dashed border-neutral-300 rounded-md xl:max-w-[74px] max-w-[40px] w-full"></img>
                                <img src={medicine} className="border-2 border-dashed border-neutral-300 rounded-md xl:max-w-[74px] max-w-[40px] w-full"></img>
                                <img src={medicine} className="border-2 border-dashed border-neutral-300 rounded-md xl:max-w-[74px] max-w-[40px] w-full"></img>
                                <img src={medicine} className="border-2 border-dashed border-neutral-300 rounded-md xl:max-w-[74px] max-w-[40px] w-full"></img>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-lg font-medium py-4 ">Product Details</h5>
                            <h5 className="font-normal text-lg  ">Iron and Folic Acid Tablet to manage Iron Deficiency, Energy & Health</h5>
                            <div className="flex  mt-4">
                                <div className="">
                                    <div className="flex mt-2">
                                        <PersonIcon />
                                        <p className="capitalize ">menufacturer name</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <BrandingWatermarkIcon />
                                        <p className="capitalize">brand</p>
                                    </div>
                                    <div className="flex  mt-2">
                                        <CategoryIcon />
                                        <p className="capitalize ">category</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <RateReviewIcon />
                                        <p className="capitalize ">review</p>
                                    </div>
                                    <div className="flex mt-2">
                                        <PublishedWithChangesIcon />
                                        <p className="capitalize ">published</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="capitalize mt-2 ">abc patel</p>
                                    <p className="capitalize mt-2 ">brand name</p>
                                    <p className="capitalize mt-2">pills</p>
                                    <p className="capitalize mt-2 ">(05)review</p>
                                    <p className="capitalize mt-2">01 august 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12">
                        <p className="">Product Description</p>
                        <p className="mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae reprehenderit repellendus expedita esse cupiditate quos doloremque rerum, corrupti ab illum est nihil,
                            voluptate ex dignissimos! Sit voluptatem delectus nam, molestiae, repellendus ab sint quo aliquam debitis amet natus doloremque laudantium? Repudiandae, consequuntur,
                            officiis quidem quo deleniti, autem non laudantium sequi error molestiae ducimus accusamus facere velit consectetur vero dolore natus nihil temporibus aspernatur quia
                            consequatur? Consequuntur voluptate deserunt repellat tenetur debitis molestiae doloribus dicta. In rem illum dolorem atque ratione voluptates asperiores maxime doloremque
                            laudantium magni neque ad quae quos quidem, quaerat rerum ducimus blanditiis reiciendis
                        </p>
                    </div>
                    <div className="mt-12">
                        <p className="">Rating Analytics</p>
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
                    </div>
                    <div className="mt-12">
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
                    </div>
                </div>
            </div>
        </>
    );
};

export default Productview;
