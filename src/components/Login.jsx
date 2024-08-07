import {TextInput} from "flowbite-react";
import {HiMail} from "react-icons/hi";
import {RiLockPasswordFill} from "react-icons/ri";
import {FcGoogle} from "react-icons/fc";
import {Link} from "react-router-dom";
import {VscEye} from "react-icons/vsc";
import {TbEyeClosed} from "react-icons/tb";
import {useState} from "react";

const Login = () => {
    const [changePassword, setChangePassword] = useState(true);
    const changeIcon = changePassword === true ? false : true;
    return (
        <div className="">
            <section className=" ">
                <div className=" ">
                    <img
                        src="public/imgs/logo.jpg"
                        alt="rfd"
                        className=" w-32  ms-10  mt-10 mb-10"
                    />

                    <form className=" bg-white-100 shadow-xl rounded-xl p-7 w-96 mx-auto">
                        <div className="mb-4">
                            <h1 className="mb-4 text-2xl font-bold  text-center ">LOGIN HERE</h1>
                        </div>
                        <div className="border-0">
                            <TextInput
                                id="email4"
                                type="email"
                                icon={HiMail}
                                placeholder="enter your email"
                                required
                            />
                        </div>
                        <div className="mt-5 flex justify-between">
                            <TextInput
                                id="password"
                                type={changePassword ? "password" : "text"}
                                icon={RiLockPasswordFill}
                                placeholder="enter your password"
                                className="w-full"
                                required
                            />
                            <span
                                className="icon my-auto border rounded-3xl h-auto w-auto ms-2"
                                onClick={() => {
                                    setChangePassword(changeIcon);
                                }}
                            >
                                {changeIcon ? (
                                    <VscEye className="text-lg m-1" />
                                ) : (
                                    <TbEyeClosed className="text-lg m-1" />
                                )}
                            </span>
                        </div>
                        <div className="mt-5">
                            <button
                                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                Sign In
                            </button>
                        </div>
                        <div className="mt-5 flex justify-center ">
                            <button
                                className=" font-bold text-lg  text-slate-500 hover:text-blue-500"
                                href="#"
                            >
                                Forgot Password?
                            </button>
                        </div>
                        <div className="mt-4">
                            <p className="text-center text-lg font-bold ">or</p>
                        </div>
                        <div className="mt-4    ">
                            <div className="w-full flex justify-center items-center p-3 border bg-white hover:border-blue-500 rounded font-bold text-blue-500">
                                <FcGoogle className="mr-2 text-xl" /> Sign In With Google
                            </div>
                        </div>
                        <div className="text-center mt-5 btn">
                            <Link to="/register">
                                {"Don't"} Have An Account?
                                <span className="text-blue-500 font-bold btn ms-2">
                                    Register here
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Login;
