import {useState, useEffect} from "react";
import axios from "axios";

const Home = () => {
    const [product, setProduct] = useState({
        name: "",
        price: "",
        seller_id: "",
        manufacturer_id: "",
    });

    const [products, setProducts] = useState([]);
    const [sellers, setSellers] = useState([]);
    const [manufacturers, setManufacturers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch data on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [productsResponse, sellersResponse, manufacturersResponse] =
                    await Promise.all([
                        axios.get("http://192.168.1.4:8441/products/details"),
                        axios.get("http://192.168.1.4:8441/sellers"),
                        axios.get("http://192.168.1.4:8441/manufacturers"),
                    ]);

                setProducts(productsResponse.data);
                setSellers(sellersResponse.data);
                setManufacturers(manufacturersResponse.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError("Failed to fetch data.");
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8441/products/create", product)
            .then((response) => {
                alert("Product created successfully.");
                // console.log(response);

                setProduct({
                    name: "",
                    price: "",
                    seller_id: "",
                    manufacturer_id: "",
                });
                // Refresh the product list
                return axios.get("http://localhost:8441/products/details");
            })
            .then((response) => setProducts(response.data))
            .catch((error) => {
                console.error("Error creating product:", error);
                alert("Error creating product.");
            });
    };

    return (
        <>
            <div>
                <h1>Create New Product</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Price:
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleChange}
                            required
                        />
                    </label>
                    <br />

                    <label>
                        Seller:
                        <select
                            name="seller_id"
                            value={product.seller_id}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Seller</option>
                            {sellers.map((seller) => (
                                <option key={seller.id} value={seller.id}>
                                    {seller.name} ({seller.id})
                                </option>
                            ))}
                        </select>
                    </label>
                    <br />

                    <label>
                        Manufacturer:
                        <select
                            name="manufacturer_id"
                            value={product.manufacturer_id}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Manufacturer</option>
                            {manufacturers.map((manufacturer) => (
                                <option key={manufacturer.id} value={manufacturer.id}>
                                    {manufacturer.name} ({manufacturer.id})
                                </option>
                            ))}
                        </select>
                    </label>
                    <br />

                    <button type="submit">Create Product</button>
                </form>
            </div>
            <div>
                <h1>Product Details</h1>
                {loading && <p>Loading...</p>}
                {error && <p style={{color: "red"}}>{error}</p>}
                {!loading && !error && (
                    <table>
                        <thead>
                            <tr>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Seller ID</th>
                                <th>Seller Name</th>
                                <th>Seller Personal</th>
                                <th>Seller Member</th>
                                <th>Manufacturer ID</th>
                                <th>Manufacturer Name</th>
                                <th>Manufacturer Address</th>
                                <th>Manufacturer M Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product) => (
                                <tr key={product.product_id}>
                                    <td>{product.product_id}</td>
                                    <td>{product.product_name}</td>
                                    <td>${product.product_price}</td>
                                    <td>{product.seller_id}</td>
                                    <td>{product.seller_name}</td>
                                    <td>{product.seller_personal}</td>
                                    <td>{product.seller_member}</td>
                                    <td>{product.manufacturer_id}</td>
                                    <td>{product.manufacturer_name}</td>
                                    <td>{product.manufacturer_address}</td>
                                    <td>{product.manufacturer_m_number}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
};

export default Home;
