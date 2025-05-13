import axios from "axios";
import { createContext, ReactNode, useState } from "react";

interface cart {
    cart: any;
    getAllCartItems: () => void;
    addToCart: (title: string, thumbnail: string, quentity: number, mrp: number, sellingPrice: number, productId: string) => void;
    removeFromCart: (itemId: string) => void;
    editQuantity: (quentity: number, itemId: string) => void;
}

export const CartContext = createContext<cart | undefined>(undefined);

interface cartProvider {
    children: ReactNode;
}

export const CartContextProvider = ({ children }: cartProvider) => {
    const [cart, setCart] = useState();

    const addToCart = (title: string, thumbnail: string, quentity: number, mrp: number, sellingPrice: number, productId: string) => {
        axios.post("http://localhost:9000/api/cart/add-to-cart", {
            title, thumbnail, quentity, mrp, sellingPrice, productId
        }, {
            withCredentials: true
        })
    }

    const removeFromCart = (itemId: string) => {
        axios.delete(`http://localhost:9000/api/cart/remove-from-cart/${itemId}`)
            .then((res) => console.log("Removed successfully", res))
            .catch((err) => console.log("Failed to remove from cart", err));
    }

    const editQuantity = (quentity: number, itemId: string) => {
        axios.patch("http://localhost:9000/api/cart/increase-quentity", {
            quentity, itemId
        })
            .then((res) => console.log("Quentity increased successfully", res))
            .catch((err) => console.log("Failed to increased Quentity", err));
    }

    const getAllCartItems = () => {
        axios.get("http://localhost:9000/api/cart/get-all-cart-items", {
            withCredentials: true
        })
            .then((res) => setCart(res.data.data))
            .catch((err) => console.log("Failed to get cart", err));
    }

    return (
        <CartContext value={{ cart, getAllCartItems, addToCart, removeFromCart, editQuantity }}>
            {children}
        </CartContext>
    )
}