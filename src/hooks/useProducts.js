import { useState, useEffect } from "react";
import { getProducts } from "../api/productApi";

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const items = await getProducts();
                setProducts(items);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        loadProducts();
    }, []);

    return { products, setProducts };
};

export default useProducts;
