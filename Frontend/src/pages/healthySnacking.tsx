import ProductsCart from "@/components/ui/productsCard";
import { useProducts } from "@/context/productContextProvider";
import { useEffect, useState } from "react";

function HealthySnacking() {
  const product = useProducts();
  const [healthySnacking, setHealthySnacking] = useState<any>(null);

  useEffect(() => {
    if (!product?.products) {
      product?.getAllProduct();
    }

    setHealthySnacking(product?.products?.filter((product: any) => product.category == "Healthy Yummy Snacking"));
  }, [product?.products])

  return (
    <>
      <ProductsCart category="Healthy Snacking" items={healthySnacking} />
    </>
  )
}

export default HealthySnacking;