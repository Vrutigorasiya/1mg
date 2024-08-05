import React, { useEffect, useState, useRef } from "react";
// import HomeIcon from "@mui/icons-material/Home";
import { Box, Button, FormControl, Select, MenuItem, Rating, TextareaAutosize } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Country, State, City } from "country-state-city";
import { Link } from "react-router-dom";

const Productupload = () => {
    const [age, setAge] = React.useState("");
    const [product, setProduct] = React.useState("");
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [images, setImges] = useState(["", "", "", "", ""]);

    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

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
                setCities([]); // Clear cities when country changes
            }
        }
    }, [selectedCountry]);

    // Fetch cities when a state is selected
    useEffect(() => {
        if (selectedState) {
            setCities(City.getCitiesOfState(selectedCountry, selectedState));
            setSelectedCity("");
        }
    }, [selectedState, selectedCountry]);

    // Handlers for dropdown changes
    const handleCountryChange = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    };

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    };

    const inputRef = useRef(null);

    const handleImageclick = () => {
        inputRef.current.click();
    };
    const handleImagechange = (e, index) => {
        const file = e.target.files[0];
        images[index] = file;
        setImges([...images]);
    };

    const categoryhandleChange = (event) => {
        setAge(event.target.value);
    };

    const producthandleChange = (event) => {
        setProduct(event.target.value);
    };

    const labels = {
        0.5: "0.5",
        1: "1",
        1.5: "1.5",
        2: "2",
        2.5: "2.5",
        3: "3",
        3.5: "3.5",
        4: "4",
        4.5: "4.5",
        5: "5",
    };

    function getLabelText(value) {
        return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
    }

    return (
        <>
            <div className="container mx-auto">
                <div className="shadow bg-white mt-7 mx-3 rounded-md p-5 block md:flex lg:flex items-center justify-between">
                    <div className=" ">
                        <h5 className="text-lg font-medium">Product Upload</h5>
                    </div>
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                            <li className="inline-flex items-center">
                                <Link to="/dashboard" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
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
                                    <Link to="#" className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">
                                        Products
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">Product upload</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="shadow bg-white mt-7 mx-3 rounded-md p-5">
                    <h5 className="text-lg font-medium py-4">Basic Information</h5>
                    <div className="block lg:flex md:flex gap-5">
                        <div className="w-full md:w-1/2 lg:w1/2 ">
                            <label className="uppercase text-xs">product name</label>
                            <input type="text" className="rounded w-full mt-1 outline-none text-sm p-3" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }}></input>
                        </div>
                        <div className="w-full md:w-1/2 lg:w1/2">
                            <label className="uppercase text-xs">brand name</label>
                            <input type="text" className="rounded w-full mt-1 outline-none text-sm p-3" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }}></input>
                        </div>
                    </div>

                    <label className="uppercase text-xs mt-5">product highlights</label>
                    <TextareaAutosize aria-label="minimum height" minRows={3} className="rounded outline-none mt-1 w-full" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }} />
                    <label className="uppercase text-xs mt-5">description</label>
                    <TextareaAutosize aria-label="minimum height" minRows={3} className="rounded outline-none mt-1 w-full" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }} />
                    <label className="uppercase text-xs mt-5">Ingredients</label>
                    <TextareaAutosize aria-label="minimum height" minRows={3} className="rounded outline-none mt-1 w-full" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }} />
                    <label className="uppercase text-xs mt-5">Benefits</label>
                    <TextareaAutosize aria-label="minimum height" minRows={3} className="rounded outline-none mt-1 w-full" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }} />
                    <label className="uppercase text-xs mt-5">directions for use</label>
                    <TextareaAutosize aria-label="minimum height" minRows={2} className="rounded outline-none mt-1 w-full" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }} />
                    <label className="uppercase text-xs mt-5">storage instruction</label>
                    <TextareaAutosize aria-label="minimum height" minRows={2} className="rounded outline-none mt-1 w-full" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }} />
                    <label className="uppercase text-xs mt-5">safety warning</label>
                    <TextareaAutosize aria-label="minimum height" minRows={2} className="rounded outline-none mt-1 w-full" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }} />
                </div>

                <div className="shadow bg-white mt-7 mx-3 rounded-md p-5">
                    <h5 className="text-lg font-medium py-4">Additional Information</h5>
                    <div className="flex gap-5">
                        <div className="w-full md:w-1/2 lg:w-1/2">
                            <label className="uppercase text-xs mt-5">category</label>
                            <FormControl className="w-full">
                                <Select value={age} onChange={categoryhandleChange} displayEmpty inputProps={{ "aria-label": "Without label" }}>
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Category 1</MenuItem>
                                    <MenuItem value={20}>Category 2</MenuItem>
                                    <MenuItem value={30}>Category 3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/2">
                            <label className="uppercase text-xs mt-5">product type</label>
                            <FormControl className="w-full">
                                <Select value={product} onChange={producthandleChange} displayEmpty inputProps={{ "aria-label": "Without label" }}>
                                    <MenuItem value="">
                                        <em>Select</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Product 1</MenuItem>
                                    <MenuItem value={20}>Product 2</MenuItem>
                                    <MenuItem value={30}>Product 3</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <label className="uppercase text-xs mt-5">product rating</label>
                    <Box
                        sx={{
                            width: 200,
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                                setHover(newHover);
                            }}
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                        {value !== null && <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>}
                    </Box>
                </div>
                <div className="shadow bg-white mt-7 mx-3 rounded-md p-5 ">
                    <h5 className="text-lg font-medium py-4">Contact Information</h5>
                    <div className="lg:flex md:flex block gap-5">
                        <div className="md:w-1/3 lg:w-1/3 w-full ">
                            <label className="uppercase text-xs mb-2 ">Mobile number</label>
                            <PhoneInput
                                inputStyle={{
                                    width: "100%",
                                    height: "40px",
                                    backgroundColor: "#fafafa",
                                }}
                                country={"in"}
                            />
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 w-full">
                            <label className="uppercase text-xs">Email</label>
                            <input type="text" className="rounded w-full mt-1 outline-none text-sm p-3" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }}></input>
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 w-full">
                            <label className="uppercase text-xs">website url</label>
                            <input type="text" className="rounded w-full mt-1 outline-none text-sm p-3" style={{ backgroundColor: "#fafafa", border: "1px solid #0000001a" }}></input>
                        </div>
                    </div>
                    <div className="lg:flex md:flex gap-5">
                        <div className="md:w-1/3 lg:w-1/3 w-full sm:block">
                            <label className="uppercase text-xs mt-5">Country</label>
                            <FormControl className="w-full">
                                <Select value={selectedCountry} onChange={handleCountryChange} displayEmpty inputProps={{ "aria-label": "Without label" }}>
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
                            <label className="uppercase text-xs mt-5">State</label>
                            <FormControl className="w-full">
                                <Select
                                    value={selectedState}
                                    onChange={handleStateChange}
                                    displayEmpty
                                    inputProps={{ "aria-label": "Without label" }}
                                    disabled={!selectedCountry} // Disable if no country is selected
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
                            <label className="uppercase text-xs mt-5">City</label>
                            <FormControl className="w-full">
                                <Select
                                    value={selectedCity}
                                    onChange={handleCityChange}
                                    displayEmpty
                                    inputProps={{ "aria-label": "Without label" }}
                                    disabled={!selectedState} // Disable if no state is selected
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
                </div>
                <div className="shadow bg-white mt-7 mx-3 rounded-md p-5 mb-3">
                    <h5 className="text-lg font-medium py-4">Product Images</h5>

                    <div className="flex gap-3 flex-wrap justify-evenly lg:flex-nowrap ">
                        {images?.map((item, index) => (
                            <div key={index} className="relative max-w-[200px] w-full h-[200px] ">
                                {images[index] ? (
                                    <img
                                        src={URL.createObjectURL(images[index])}
                                        id="profile-pic"
                                        className="w-full h-full object-contain border-2 rounded-md border-dashed border-gray-300"
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

                    <div className="mt-3">
                        <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full mt-5 uppercase">
                            submit
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Productupload;
