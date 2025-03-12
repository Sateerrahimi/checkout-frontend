import React from "react";
import { Card, CardContent, Typography, Select, MenuItem, Button } from "@mui/material";
import "./Product.css"; // ✅ Import styles

function ProductCard({ product, selectedQuantity, handleQuantityChange, addToCart }) {
    return (
        <Card variant="outlined" className="product-card">
            <CardContent>
                <Typography variant="h6" className="product-name">{product.name}</Typography>
                <Typography variant="body1" className="product-price">${product.price.toFixed(2)}</Typography>
                <Typography
                    variant="body2"
                    className={`product-stock ${product.stock === 0 ? "out-of-stock" : ""}`}
                >
                    Stock: {product.stock === 0 ? "Out of Stock" : product.stock}
                </Typography>
                <Select
                    value={selectedQuantity || 1}
                    onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                    fullWidth
                    sx={{ marginTop: 1 }}
                    disabled={product.stock === 0}
                >
                    {[1, 2, 3, 4, 5].map((q) => (
                        <MenuItem key={q} value={q}>{q}</MenuItem>
                    ))}
                </Select>
                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ marginTop: 1 }}
                    onClick={() => addToCart(product, selectedQuantity || 1)}
                    disabled={product.stock === 0}
                    className="add-to-cart-button"
                >
                    {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
                </Button>
            </CardContent>
        </Card>
    );
}

export default ProductCard;
