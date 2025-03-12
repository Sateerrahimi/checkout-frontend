import React, { useContext } from "react";
import { Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import { CartContext } from "../../context/CartContext"; // ✅ Get products from CartContext
import "./Product.css"; // ✅ Import styles

function ProductList({ selectedQuantities, handleQuantityChange }) {
    const { products, addToCart } = useContext(CartContext); // ✅ Use products from context

    return (
        <div className="product-list-container">
            <Typography variant="h5" gutterBottom className="product-list-title">
                Select Items for Checkout
            </Typography>
            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <ProductCard
                            product={product}
                            selectedQuantity={selectedQuantities[product.id] || 1}
                            handleQuantityChange={handleQuantityChange}
                            addToCart={addToCart}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default ProductList;
