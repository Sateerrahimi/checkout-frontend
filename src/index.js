import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AuthProvider> {/* ✅ Provides authentication context */}
            <ProductProvider> {/* ✅ Provides product data */}
                <CartProvider> {/* ✅ Provides cart functionality */}
                    <App />
                    <ToastContainer position="top-center" autoClose={1000} />
                </CartProvider>
            </ProductProvider>
        </AuthProvider>
    </React.StrictMode>
);

reportWebVitals();
