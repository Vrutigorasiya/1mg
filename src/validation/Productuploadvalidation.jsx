import * as Yup from "yup";

export const productuploadvalidation = Yup.object({
    productname: Yup.string().min(3).required("Please Enter product name"),
    productbrand: Yup.string().min(3).required("Please Enter brand name"),
    producthighlight: Yup.string().min(3).required("Please Enter product highlight"),
    productdescription: Yup.string().min(3).required("Please Enter product description"),
    productingredients: Yup.string().min(3).required("Please Enter product ingredients"),
    productbenefits: Yup.string().min(3).required("Please Enter product benefits"),
    productdirections: Yup.string().min(3).required("Please Enter product directions"),
    productstorage: Yup.string().min(3).required("Please Enter product storage"),
    productsafety: Yup.string().min(3).required("Please Enter product safety"),
});
