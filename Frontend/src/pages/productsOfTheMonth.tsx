import { useProducts } from "@/context/productContextProvider";
import ProductsCart from "../components/ui/productsCard"
import { useEffect, useState } from "react";

function ProductsOfTheMonth() {
    const product = useProducts();
    const [productsOfTheMonth, setProductsOfTheMonth] = useState<any>(null);

    useEffect(() => {
        if (!product?.products) {
            product?.getAllProduct();
        }

        setProductsOfTheMonth(product?.products);
    }, [product?.products])

    return (
        <>
            <ProductsCart category='Products Of The Month' items={productsOfTheMonth} />
        </>
    )
}

export default ProductsOfTheMonth