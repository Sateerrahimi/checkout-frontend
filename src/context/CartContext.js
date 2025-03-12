import React, { createContext, useState, useEffect } from "react";
import { getCartItems, addCartItem, removeCartItem, increaseProductStock } from "../api/cartApi";
import { getProducts, decreaseProductStock } from "../api/productApi";
import { toast } from "react-toastify";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    /*const [cart, setCart] = useState([]);*/
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadCart();
        loadProducts();
    }, []);

    const loadCart = async () => {
        const items = await getCartItems();
        setCart(items);
    };

    const loadProducts = async () => {
        const items = await getProducts();
        setProducts(items);
    };

    const addToCart = async (product, quantity) => {
        if (product.stock < quantity) {
            toast.error(`Not enough stock for "${product.name}". Available: ${product.stock}`);
            return;
        }

        const existingItemIndex = cart.findIndex((item) => item.id === product.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            const newItem = { name: product.name, price: product.price, quantity };
            const item = await addCartItem(newItem);
            setCart([...cart, item]);

            /* new line added*/
            localStorage.setItem("cart", JSON.stringify([...cart, item]));
        }

        await decreaseProductStock(product.id, quantity);
        setProducts((prevProducts) =>
            prevProducts.map((p) =>
                p.id === product.id ? { ...p, stock: p.stock - quantity } : p
            )
        );

        toast.success(`Added ${quantity} ${product.name}(s) to cart.`);
    };

    const removeFromCart = async (id) => {
        const item = cart.find((i) => i.id === id);
        if (!item) {
            console.error("❌ Error: Item not found in cart.");
            return;
        }

        console.log(`🔍 Removing item: ${item.name} | Correct Product ID: ${item.id} | Quantity: ${item.quantity}`);

        try {
            const product = products.find((p) => p.name === item.name);
            if (!product) {
                console.error("❌ Error: Product not found in the product list.");
                return;
            }

            console.log(`🔄 Calling increaseProductStock API: Product ID = ${product.id}, Quantity = ${item.quantity}`);
            await increaseProductStock(product.id, item.quantity);

            setProducts((prevProducts) =>
                prevProducts.map((p) =>
                    p.id === product.id ? { ...p, stock: p.stock + item.quantity } : p
                )
            );

            await removeCartItem(id);
            setCart(cart.filter((i) => i.id !== id));
            toast.info(`Removed ${item.quantity} ${item.name}(s) from cart, stock updated.`);
        } catch (error) {
            console.error("❌ Error in removeFromCart:", error);
            toast.error("Error updating stock. Please try again.");
        }
    };

    const clearCart = async () => {
        try {
            setCart([]);
            /*added new line*/
            localStorage.removeItem("cart");
            toast.success("Cart cleared successfully.");
        } catch (error) {
            console.error("Error clearing cart:", error);
            toast.error("Failed to clear cart.");
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, products }}>
            {children}
        </CartContext.Provider>
    );
};
