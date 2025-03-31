import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

interface product {
    products: any;
    addProduct: (title: string, images: string[], mrp: number, sellingPrice: number, category: string, options: string[], descriptions: object[]) => void;
    getOneProduct: (pId: string) => object;
    getAllProduct: () => void;
}

export const ProductContext = createContext<product | undefined>(undefined);

interface productProvider {
    children: ReactNode;
}

export const ProductContextProvider = ({ children }: productProvider) => {
    const [products, setProducts] = useState(null);

    const addProduct = (title: string, images: string[], mrp: number, sellingPrice: number, category: string, options: string[], descriptions: object[]) => {
        axios.post("http://localhost:9000/api/product/add", {
            title,
            mrp,
            images,
            sellingPrice,
            category,
            options,
            descriptions
        })
            .then((res) => console.log("Product added successfully", res))
            .catch((err) => console.log("Failed to add product", err));
    }

    const getOneProduct = async (pId: string) => {
        try {
            const product = await axios.get(`http://localhost:9000/api/product/get-one/${pId}`);
            return product;
        } catch (error) {
            console.log("failed to get product");
        }
    }

    const getAllProduct = () => {
        axios.get("http://localhost:9000/api/product/get-all")
            .then((res) => setProducts(res.data))
            .catch((err) => console.log("failed to fetch products: ", err));
    }

    return (
        <ProductContext.Provider value={{ products, addProduct, getOneProduct, getAllProduct }}>
            {children}
        </ProductContext.Provider>
    )
};

export const useProducts = () => useContext(ProductContext);