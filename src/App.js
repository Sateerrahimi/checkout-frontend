import React, { useEffect, useState, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { getProducts } from "./api/productApi";
import Navbar from "./components/Navigation/Navbar";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import { CartContext } from "./context/CartContext";
import { Container} from "@mui/material";

const App = () => {
    const [products, setProducts] = useState([]);
    const [selectedQuantities, setSelectedQuantities] = useState({});
    const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const items = await getProducts();
        setProducts(items);
    };

    const handleQuantityChange = (productId, quantity) => {
        setSelectedQuantities((prev) => ({ ...prev, [productId]: quantity }));
    };

    const handleToggleCart = () => {
        navigate("/cart");
    };

    return (
        <>
            <Navbar cartItemCount={cart.length} toggleCart={handleToggleCart} />

            <Container maxWidth="md">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                products={products}
                                selectedQuantities={selectedQuantities}
                                handleQuantityChange={handleQuantityChange}
                                addToCart={addToCart}
                            />
                        }
                    />
                    <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/success" element={<Success />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </>
    );
};

// Wrap the App component in Router
const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
