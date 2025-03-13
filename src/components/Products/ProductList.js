import React, { useContext } from "react";
import { Grid2, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { CartContext } from "../../context/CartContext";
import "./Product.css";

function ProductList({ selectedQuantities, handleQuantityChange }) {
    const { products, addToCart } = useContext(CartContext);

    return (
        <div className="product-list-container">
            <Typography variant="h5" gutterBottom className="product-list-title">
                Select Items for Checkout
            </Typography>
            <Grid2 container spacing={3}>
                {products.map((product) => (
                    <Grid2 item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard
                            product={product}
                            selectedQuantity={selectedQuantities[product.id] || 1}
                            handleQuantityChange={handleQuantityChange}
                            addToCart={addToCart}
                        />
                    </Grid2>
                ))}
            </Grid2>
        </div>
    );
}
export default ProductList;
