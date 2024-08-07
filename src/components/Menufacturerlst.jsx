import {useEffect, useState} from "react";
import {FormControl, Select, MenuItem} from "@mui/material";
import {Country, State, City} from "country-state-city";
import {useFormik} from "formik";
import {api} from "../api";

const Menufacturerlst = () => {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [ selectedFile, setSelectedFile] = useState()
    
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, []);

    useEffect(() => {
        if (selectedCountry) {
            const country = Country.getCountryByCode(selectedCountry);
            if (country) {
                setStates(State.getStatesOfCountry(selectedCountry));
                setSelectedState("");
                setCities([]);
            }
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedState) {
            setCities(City.getCitiesOfState(selectedCountry, selectedState));
            setSelectedCity("");
        }
    }, [selectedState, selectedCountry]);

    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const {values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            m_name: "",
            m_c_name: "",
            website: "",
            email: "",
            m_street: "",
            m_country: "",
            m_state: "",
            m_city: "",
            m_category: "",
            m_lic_number: "",
            m_logo: null,
        },
        onSubmit: () => {
            values.m_country = selectedCountry;
            values.m_state = selectedState;
            values.m_city = selectedCity;
            values.m_logo = selectedFile
            console.log('vshdshdjsjd')
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
                formData.append(key, values[key]);
            });
            console.log("qwedsa", values);

            try {
                const response = api.post("/manufacturer/create-manufacturers", formData);
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
            console.log(values);
        },
    });

    const handleUpload = async (event) => {
        const file = event.target.files[0]

        const reader = new FileReader();

        reader.onloadend = async () => {
            const binaryData = reader.result;

            const formData = new FormData();
            formData.append("image", new Blob([binaryData], {type: file.type}), file.name);

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
        // setValues("m_logo", file)
        setSelectedFile(file)
    };

    return (
        <div>
            <section className="flex max-w-screen-2xl md:mx-7 lg:mx-10  mt-10  justify-between border p-5 rounded-xl shadow-xl">
                <div className="">
                    <h3 className="lg:text-lg sm:text-sm font-bold">Menufacture List</h3>
                </div>
                <div>
                    <nav className="flex lg:me-5" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <a
                                    href="#"
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-green-600 dark:text-gray-400 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3 me-2.5"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                    </svg>
                                    Dashbord
                                </a>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg
                                        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 6 10"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 9 4-4-4-4"
                                        />
                                    </svg>
                                    <a
                                        href="#"
                                        className="ms-1 text-sm font-medium text-gray-700 hover:text-green-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                                    >
                                        Menufacture List
                                    </a>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </section>
            <section className="border shadow-xl rounded p-7  mx-10 my-10">
                <h3 className="text-2xl font-bold">Menufacture List</h3>
                <div className=" mt-10">
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Menufacturer Name
                                </label>
                                <input
                                    type="text"
                                    name="m_name"
                                    // value={product.m_name}
                                    value={values.m_name}
                                    onChange={handleChange}
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="last_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Company Name
                                </label>
                                <input
                                    type="text"
                                    name="m_c_name"
                                    // value={product.m_c_name}
                                    value={values.m_c_name}
                                    onChange={handleChange}
                                    id="last_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="website"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Website URL
                                </label>
                                <input
                                    type="url"
                                    name="website"
                                    value={values.website}
                                    onChange={handleChange}
                                    id="website"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                />
                            </div>
                            <div className="">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                />
                            </div>
                        </div>

                        <div className="block  ">
                            <div className="w-full ">
                                <label className="uppercase text-xs font-medium">street name</label>
                                <input
                                    type="text"
                                    name="m_street"
                                    value={values.m_street}
                                    onChange={handleChange}
                                    className="rounded w-full mt-1 outline-none text-sm p-3"
                                    style={{
                                        backgroundColor: "#fafafa",
                                        border: "1px solid #0000001a",
                                    }}
                                    required
                                ></input>
                            </div>
                        </div>
                        <div className="lg:flex md:flex gap-5 mt-4 ">
                            <div className="md:w-1/3 lg:w-1/3 w-full sm:block">
                                <label className="uppercase text-xs  font-medium">Country</label>
                                <FormControl className="w-full">
                                    <Select
                                        value={selectedCountry}
                                        type="select"
                                        name="m_country"
                                        onChange={handleCountryChange}
                                        displayEmpty
                                        inputProps={{"aria-label": "Without label"}}
                                        required
                                    >
                                        <MenuItem value="">
                                            <em>Select Country</em>
                                        </MenuItem>
                                        {countries.map((country) => (
                                            <MenuItem key={country.isoCode} value={country.isoCode}>
                                                {country.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="md:w-1/3 lg:w-1/3 w-full sm:block">
                                <label className="uppercase text-xs font-medium">State</label>
                                <FormControl className="w-full">
                                    <Select
                                        value={selectedState}
                                        type="select"
                                        name="m_state"
                                        onChange={handleStateChange}
                                        displayEmpty
                                        inputProps={{"aria-label": "Without label"}}
                                        disabled={!selectedCountry} // Disable if no country is selected
                                        required
                                    >
                                        <MenuItem value="">
                                            <em>Select State</em>
                                        </MenuItem>
                                        {states.map((state) => (
                                            <MenuItem key={state.isoCode} value={state.isoCode}>
                                                {state.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="md:w-1/3 lg:w-1/3 w-full sm:block">
                                <label className="uppercase text-xs  font-medium">City</label>
                                <FormControl className="w-full">
                                    <Select
                                        value={selectedCity}
                                        onChange={handleCityChange}
                                        type="select"
                                        name="m_city"
                                        displayEmpty
                                        inputProps={{"aria-label": "Without label"}}
                                        disabled={!selectedState} // Disable if no state is selected
                                        required
                                    >
                                        <MenuItem value="">
                                            <em>Select City</em>
                                        </MenuItem>
                                        {cities.map((city) => (
                                            <MenuItem key={city.name} value={city.name}>
                                                {city.name}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="grid gap-6 mb-6 md:grid-cols-2 mt-5">
                            <div>
                                <label
                                    htmlFor="countries"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Product Type
                                </label>
                                <select
                                    id="countries"
                                    type="select"
                                    name="m_category"
                                    value={values.m_category}
                                    onChange={handleChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                >
                                    <option value="Red">Red</option>
                                    <option value="Yellow">Yellow</option>
                                    <option value="Green">Green</option>
                                    <option value="Black">Black</option>
                                </select>
                            </div>
                            <div>
                                <label
                                    htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Lisence number
                                </label>
                                <input
                                    type="text"
                                    name="m_lic_number"
                                    value={values.m_lic_number}
                                    onChange={handleChange}
                                    id="first_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder=""
                                />
                            </div>
                        </div>
                        <div className="my-4">
                            <label
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                htmlFor="file_input"
                            >
                                Upload logo
                            </label>
                            <input
                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="m_logo"
                                type="file"
                                name="m_logo"
                                value={values.m_logo}
                                onChange={handleUpload}
                            />
                        </div>
                        <div>
                            <button
                                type="submit"
                                className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  lg:w-1/2 md:w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 block mx-auto"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Menufacturerlst;
