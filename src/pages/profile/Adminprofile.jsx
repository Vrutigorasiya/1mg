import  { useEffect, useRef, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

const Adminprofile = () => {
    const eleemntref = useRef();
    useEffect(() => {
        eleemntref.current && eleemntref.current.scrollIntoView();
    }, []);

    const [openModal, setOpenModal] = useState(false);
    const [input, setinput] = useState({});
    const [images, setImges] = useState([""]);

    function onCloseModal() {
        setOpenModal(false);
    }
    const inputRef = useRef(null);

    const handleImageclick = () => {
        inputRef.current.click();
    };
    const handleImagechange = (e, index) => {
        const file = e.target.files[0];
        images[index] = file;
        setImges([...images]);
    };

    const input_handler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });
    };


    const view_handler = (value, index) => {
        setinput(value);
        setindview(index);
    };

    const update_data = (value) => {
        fake.splice(value, 1, input);
        setfake([...fake]);
    };

    return (
        <>
            <div ref={eleemntref}>
                <div className="">
                    <div className="mt-7 rounded-md p-5 block md:flex lg:flex items-center justify-between">
                        <h5 className="text-2xl font-medium capitalize">profile details</h5>
                    </div>
                    <div className="shadow-lg bg-white mx-3 rounded-md p-6 flex items-center justify-between">
                        <div className=" flex items-center">
                            <div className="">
                                {images?.map((item, index) => (
                                    <div key={index} className="relative h-[100px] w-[100px] rounded-full border-[1px] border-solid overflow-hidden ">
                                        {images[index] ? (
                                            <img
                                                src={URL.createObjectURL(images[index])}
                                                id="profile-pic"
                                                className="w-full h-full object-cover "
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
                            <div className="mx-5">
                                <p className="capitalize font-semibold text-lg">jeel vaghaniiiiii</p>
                                <p className="capitalize text-sm py-1">team manager</p>
                                <p className="capitalize text-xs  ">godhara</p>
                            </div>
                        </div>
                        <div className="bg-green-100  rounded-full px-3 py-1" onClick={() => setOpenModal(true)}>
                            <p className="capitalize"  onClick={() => view_handler(value, index)}>
                                edit <EditIcon className="!text-lg" />
                            </p>
                        </div>
                        <Modal className="bg-[#0000006b] " show={openModal} size="md" onClose={onCloseModal} popup>
                            <Modal.Header className="close" />
                            <Modal.Body className="pt-2">
                                <div className="space-y-3  ">
                                    <h3 className="text-xl capitalize font-medium text-gray-900 dark:text-white">profile details</h3>
                                    <div>
                                        <div className="mb-1 block">
                                            <Label htmlFor="name" value="Full name" />
                                        </div>
                                        <TextInput id="name" type="text" name="name" value={input.name} onChange={input_handler} placeholder="Enter your name" />
                                    </div>
                                    <div>
                                        <div className="mb-1 block">
                                            <Label htmlFor="password" value="Role" />
                                        </div>
                                        <TextInput id="name" type="text" name="role" value={input.role} onChange={input_handler} placeholder="Enter your role" />
                                    </div>
                                    <div>
                                        <div className="mb-1 block">
                                            <Label htmlFor="password" value="City" />
                                        </div>
                                        <TextInput id="name" type="text" name="city" value={input.city} onChange={input_handler} placeholder="Enter your city" />
                                    </div>
                                    <div className="flex justify-between">
                                        <button className="bg-green-100 rounded-md p-1" onClick={() => update_data(indview)}>save changes</button>
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
                                        <p className="capitalize text-base font-semibold">date of birth</p>
                                        <p className="capitalize text-sm ">10-08-2024</p>
                                    </div>
                                    <div className="w-[70%]">
                                        <p className="capitalize text-base font-semibold">address</p>
                                        <p className="capitalize text-sm ">2337 Kildeer Drive, Kentucky, Canada</p>
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
                                        <p className="capitalize text-base font-semibold">postal code</p>
                                        <p className="capitalize text-sm ">tsl 8441</p>
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
