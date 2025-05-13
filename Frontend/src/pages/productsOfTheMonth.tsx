import { useProducts } from "@/context/productContextProvider";
import ProductsCart from "../components/ui/productsCard"
import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";

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
        <div className="w-full py-8 pl-6 flex justify-center items-start gap-6 flex-col md:px-14 overflow-hidden">
            <div className="flex justify-between w-full items-center text-sm overflow-hidden">
                <h3 className="text-xl font-semibold">Products Of The Month</h3>
                <a href="/collections/all" className="pr-5 md:pr-0 flex items-center gap-2 md:translate-x-7 md:hover:translate-x-0 transition-all duration-500 ease-in-out cursor-pointer">
                    <span>View All</span>
                    <GoArrowRight className="md:block hidden" size={20} />
                </a>
            </div>
            <ProductsCart items={productsOfTheMonth} />
        </div>
    )
}

export default ProductsOfTheMonth