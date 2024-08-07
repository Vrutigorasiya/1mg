import * as Yup from "yup";

export const registerValidation = Yup.object({
    name: Yup.string().min(3).required("Please Enter Your Name"),
    email: Yup.string().email("Please Enter Valid Email ID").required("please enter valid email"),
    password: Yup.string()
        .min(8, "Password must be 8 characters long")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol")
        .required("please enter password"),
    cpassword: Yup.string().oneOf([Yup.ref("password"), null], 'please enter valid password'),
});
