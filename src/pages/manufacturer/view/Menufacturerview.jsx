import { Link } from "react-router-dom";
import React from "react";

const Menufacturerview = () => {
    return (
        <div>
            <div className="shadow bg-white mt-7 mx-3 rounded-md p-5 block md:flex lg:flex items-center justify-between">
                <div className=" ">
                    <h5 className="text-3xl font-semibold">Manufacturer View</h5>
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
                                <Link to="/manufacturerlist" className=" text-xs font-medium text-gray-700 hover:text-blue-600  dark:text-gray-400 dark:hover:text-white">
                                    Menufacturer list
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <Link to="/menufacturer_view" className=" text-xs font-medium text-gray-700 hover:text-blue-600  dark:text-gray-400 dark:hover:text-white">
                                    Menufacturer View
                                </Link>
                            </div>
                        </li>
                        
                    </ol>
                </nav>
            </div>
            <section className=" m-7 border rounded-xl shadow-xl p-10">
                <div className="lg:flex  block  lg:gap-16">
                    <div className="lg:w-1/2  w-full flex-1 ">
                        <img src="imgs/manufacturer.jpg" alt="wcas" className="w-full" />
                    </div>
                    <div className="lg:w-1/2 md:mt-7 sm:mt-7 w-full flex-2 ">
                        <h2 className="text-2xl font-bold ">Menufacturer</h2>
                        <hr  className="mb-3 "/>
                        <p className="capitalize text-base font-semibold">name :- mr mukesh</p>
                        <p className="capitalize text-base font-semibold">compny name :- mr mukesh & co.</p>
                        <p className="capitalize text-base font-semibold"> contact number :- 95365-4582</p>
                        <p className="capitalize text-base font-semibold"> email :- mrmukesh123@gmail.com</p>
                        <p className="capitalize text-base font-semibold"> url :- example@.com</p>
                        <p className="capitalize text-base font-semibold"> address :- xyz xyz xyz</p>
                        <p className="capitalize text-base font-semibold">city :- mumbai</p>
                        <p className="capitalize text-base font-semibold">state :- maharastra</p>
                        <p className="capitalize text-base font-semibold">country :- india</p>
                        <p className="capitalize text-base font-semibold">lisance number :- ebc2775dd5634ss</p>
                    </div>
                </div>
            </section>
        </div>
    );
};
    return <div>Menufacturerview</div>;
};

export default Menufacturerview;
