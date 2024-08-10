import  { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const Adminprofile = () => {
    const [openModal, setOpenModal] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
    }

    return (
        <>
            <div>
                <div className="">
                    <div className="mt-7 rounded-md p-5 block md:flex lg:flex items-center justify-between">
                        <h5 className="text-2xl font-medium capitalize">profile details</h5>
                    </div>
                    <div className="shadow-lg bg-white mx-3 rounded-md p-6 flex items-center justify-between">
                        <div className=" flex items-center">
                            <div>
                                <img src="public/imgs/01.webp" alt="abc" className="rounded-full" />
                            </div>
                            <div className="mx-5">
                                <p className="capitalize font-semibold text-lg">jeel vaghaniiiiii</p>
                                <p className="capitalize text-sm py-1">team manager</p>
                                <p className="capitalize text-xs  ">godhara</p>
                            </div>
                        </div>
                        <div className="bg-green-100  rounded-full px-3 py-1">
                            <p className="capitalize" onClick={() => setOpenModal(true)}>
                                edit <EditIcon className="!text-lg" />
                            </p>
                        </div>
                        <Modal className="bg-[#0000006b] " show={openModal} size="md" onClose={onCloseModal} popup>
                            <Modal.Header className="close" />
                            <Modal.Body className="pt-2" >
                                <div className="space-y-3  ">
                                    <h3 className="text-xl capitalize font-medium text-gray-900 dark:text-white">profile details</h3>
                                    <div>
                                        <div className="mb-1 block">
                                            <Label htmlFor="name" value="Full name" />
                                        </div>
                                        <TextInput id="name" type="text" placeholder="Enter your name" />
                                    </div>
                                    <div>
                                        <div className="mb-1 block">
                                            <Label htmlFor="password" value="Role" />
                                        </div>
                                        <TextInput id="name" type="text" placeholder="Enter your role" />
                                    </div>
                                    <div>
                                        <div className="mb-1 block">
                                            <Label htmlFor="password" value="City" />
                                        </div>
                                        <TextInput id="name" type="text" placeholder="Enter your city" />
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="bg-green-100 rounded-md p-1">save changes</button>
                                        <button className="bg-green-100 rounded-md p-1">cancel</button>
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                    <div className="shadow-lg bg-white my-5 mx-3 rounded-md p-6 ">
                        <div>
                            <div className=" flex items-center justify-between">
                                <div>
                                    <p className="capitalize font-semibold text-2xl">personal information</p>
                                </div>
                                <div className="bg-green-100  rounded-full px-3 py-1">
                                    <p className="capitalize">
                                        edit <EditIcon className="!text-lg" />
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="flex">
                                    <div className="w-[30%]">
                                        <p className="capitalize text-base font-semibold">first name</p>
                                        <p className="capitalize text-sm ">jeel</p>
                                    </div>
                                    <div className="w-[70%]">
                                        <p className="capitalize text-base font-semibold">last name</p>
                                        <p className="capitalize text-sm ">vaghani</p>
                                    </div>
                                </div>
                                <div className="flex mt-3">
                                    <div className="w-[30%]">
                                        <p className="capitalize text-base font-semibold">email address</p>
                                        <p className="capitalize text-sm ">vashru@gmail.com</p>
                                    </div>
                                    <div className="w-[70%]">
                                        <p className="capitalize text-base font-semibold">phone</p>
                                        <p className="capitalize text-sm ">+91 85214-74125</p>
                                    </div>
                                </div>
                                <div className="flex mt-3">
                                    <div className="w-[30%]">
                                        <p className="capitalize text-base font-semibold">role</p>
                                        <p className="capitalize text-sm ">team manager</p>
                                    </div>
                                    <div className="w-[70%]">
                                        <p className="capitalize text-base font-semibold">department</p>
                                        <p className="capitalize text-sm ">manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg bg-white my-5 mx-3 rounded-md p-6 ">
                        <div>
                            <div className=" flex items-center justify-between">
                                <div>
                                    <p className="capitalize font-semibold text-2xl">contact information</p>
                                </div>
                                <div className="bg-green-100  rounded-full px-3 py-1">
                                    <p className="capitalize">
                                        edit <EditIcon className="!text-lg" />
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="flex">
                                    <div className="w-[30%]">
                                        <p className="capitalize text-base font-semibold">emergency contact</p>
                                        <p className="capitalize text-sm ">+91 98563-14527</p>
                                    </div>
                                    <div className="w-[70%]">
                                        <p className="capitalize text-base font-semibold">address</p>
                                        <p className="capitalize text-sm ">surat</p>
                                    </div>
                                </div>
                                <div className="flex mt-3">
                                    <div className="w-[30%]">
                                        <p className="capitalize text-base font-semibold">country</p>
                                        <p className="capitalize text-sm ">india</p>
                                    </div>
                                    <div className="w-[70%]">
                                        <p className="capitalize text-base font-semibold">state</p>
                                        <p className="capitalize text-sm ">gujarat</p>
                                    </div>
                                </div>
                                <div className="flex mt-3">
                                    <div className="w-[30%]">
                                        <p className="capitalize text-base font-semibold">postal code</p>
                                        <p className="capitalize text-sm ">tsl 8441</p>
                                    </div>
                                    <div className="w-[70%]">
                                        <p className="capitalize text-base font-semibold">tax id</p>
                                        <p className="capitalize text-sm ">vt25874136</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shadow-lg bg-white my-5 mx-3 rounded-md p-6 ">
                        <div>
                            <div className=" flex items-center justify-between">
                                <div>
                                    <p className="capitalize font-semibold text-2xl">pharmacy information</p>
                                </div>
                                <div className="bg-green-100  rounded-full px-3 py-1">
                                    <p className="capitalize">
                                        edit <EditIcon className="!text-lg" />
                                    </p>
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="flex">
                                    <div className="w-[30%]">
                                        <p className="capitalize text-base font-semibold">pharmacy name</p>
                                        <p className="capitalize text-sm ">tata mg</p>
                                    </div>
                                    <div className="w-[70%]">
                                        <p className="capitalize text-base font-semibold">license information</p>
                                        <p className="capitalize text-sm ">surat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Adminprofile;
