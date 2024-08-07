import {useState} from "react";
import {FcGoogle} from "react-icons/fc";
import {Link} from "react-router-dom";
import {VscEye} from "react-icons/vsc";
import {TbEyeClosed} from "react-icons/tb";
import {useFormik} from "formik";
import {registerValidation} from "../validation/Registervalidation";

const Registerform = () => {
    const [changePassword, setChangePassword] = useState(true);
    const changeIcon = changePassword === true ? false : true;

    const {values, handleChange, handleSubmit, handleBlur, errors} = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: registerValidation,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            <div className=" py-12">
                <div className="flex bg-white rounded-lg shadow-2xl overflow-hidden mx-auto max-w-full lg:max-w-4xl ">
                    <div className="hidden lg:block lg:w-1/2 ">
                        <img
                            src="public/imgs/2.jpg"
                            alt="vrecsd"
                            className="w-full h-full img-fluid"
                        />
                    </div>
                    <div className="w-96 mx-auto p-5 lg:w-1/2 my-auto">
                        <p className="text-xl text-gray-600 text-center">Register a New Account</p>
                        <Link
                            to="#"
                            className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
                        >
                            <div className=" justify-center">
                                <FcGoogle className="me-2 text-xl" />
                            </div>
                            <h1 className="p-4 w-5/6 text-center text-gray-600 font-bold">
                                Sign in with Google
                            </h1>
                        </Link>
                        <div className="my-7 flex items-center justify-between ">
                            <span className="border-b w-1/5 lg:w-1/4 "></span>
                            <Link to="#" className="text-xs text-center text-gray-500 uppercase">
                                or login with email
                            </Link>
                            <span className="border-b w-1/5 lg:w-1/4"></span>
                        </div>
                        <form onSubmit={handleSubmit} >
                            <div className="mt-4 bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-4 px-6 block w-full appearance-none">
                                <input
                                    className="border-none  bg-transparent w-full decoration-none"
                                    type="name"
                                    name="name"
                                    placeholder="Name"
                                    value={values.name}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />       
                            </div>
                            {errors.name && <small className="text-red-500">{errors.name}</small>}
                            <div className="mt-4 bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none">
                                <input
                                    placeholder="Email"
                                    className="bg-transparent border-none w-full"
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                            </div>
                                {errors.email && <small className="text-red-500">{errors.email}</small>}
                            <div className="mt-4 flex  bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4   appearance-none justify-between">
                                <input
                                    type={changePassword ? "password" : "text"}
                                    name="password"
                                    className="input-field border-none bg-transparent w-full"
                                    placeholder="Password"
                                    value={values.password}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span
                                    className="icon my-auto"
                                    onClick={() => {
                                        setChangePassword(changeIcon);
                                    }}
                                    >
                                    {changeIcon ? <VscEye /> : <TbEyeClosed />}
                                </span>
                            </div>
                                    {errors.password && <small className="text-red-500">{errors.password}</small>}
                            <div className="mt-4 flex bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4  w-full appearance-none justify-between">
                                <input
                                    className="border-none bg-transparent w-full"
                                    type={changePassword ? "password" : "text"}
                                    name="cpassword"
                                    placeholder="Confirm Password"
                                    value={values.cpassword}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                />
                                <span
                                    className="icon my-auto"
                                    onClick={() => {
                                        setChangePassword(changeIcon);
                                    }}
                                    >
                                    {changeIcon ? <VscEye /> : <TbEyeClosed />}
                                </span>
                            </div>
                                    {errors.cpassword && <small className="text-red-500">{errors.cpassword}</small>}
                            <div className="flex items-center mb-3 mt-3">
                                <input
                                    id="default-checkbox"
                                    type="checkbox"
                                    value=""
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="default-checkbox"
                                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300 capitalize"
                                >
                                    I agree to the terms & conditions
                                </label>
                            </div>
                            <div className="mt-5">
                                <button className="bg-blue-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-700">
                                    Sign up
                                </button>
                            </div>
                        </form>
                        <div className="my-7 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link to="#" className="text-xs text-gray-500 uppercase">
                                or sign in
                            </Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registerform;
