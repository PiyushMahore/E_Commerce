import ProductsCart from "@/components/ui/productsCard";
import { useProducts } from "@/context/productContextProvider";
import { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";

function HealthySnacking() {
  const product = useProducts();
  const [healthySnacking, setHealthySnacking] = useState<any>(null);

  useEffect(() => {
    if (!product?.products) {
      product?.getAllProduct();
    }

    setHealthySnacking(product?.products?.filter((product: any) => product.category == "Healthy Yummy Snacking"));
  }, [product?.products]);

  return (
    <div className="w-full py-8 pl-6 flex justify-center items-start gap-6 flex-col md:px-14 overflow-hidden">
      <div className="flex justify-between w-full items-center text-sm overflow-hidden">
        <h3 className="text-xl font-semibold">Healthy Snacking</h3>
        <a href="/collections/wholesome-mixes-for-anytime-snacking" className="pr-5 md:pr-0 flex items-center gap-2 md:translate-x-7 md:hover:translate-x-0 transition-all duration-500 ease-in-out cursor-pointer">
          <span>View All</span>
          <GoArrowRight className="md:block hidden" size={20} />
        </a>
      </div>
      <ProductsCart items={healthySnacking} />
    </div>
  )
}

export default HealthySnacking;