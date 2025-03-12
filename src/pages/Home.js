import React, { useState } from "react";
import { Container } from "@mui/material";
import ProductList from "../components/Products/ProductList";
import useCart from "../hooks/useCart";

const Home = () => {
    const { addToCart } = useCart();
    const [selectedQuantities, setSelectedQuantities] = useState({});

    const handleQuantityChange = (productId, quantity) => {
        setSelectedQuantities((prev) => ({ ...prev, [productId]: quantity }));
    };

    return (
        <Container maxWidth="md">
            <ProductList
                selectedQuantities={selectedQuantities}
                handleQuantityChange={handleQuantityChange}
                addToCart={addToCart}
            />
        </Container>
    );
};

export default Home;
