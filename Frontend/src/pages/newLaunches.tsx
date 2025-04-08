import ProductsCart from '@/components/ui/productsCard'
import { useProducts } from '@/context/productContextProvider'
import { useEffect, useState } from 'react';

function NewLaunches() {
    const product = useProducts();
    const [newLaunches, setNewLaunches] = useState<any>(null);

    useEffect(() => {
        if (!product?.products) {
            product?.getAllProduct();
        }

        setNewLaunches(product?.products?.filter((product: any) => product.category == "new launches"));
    }, [product?.products])

    return (
        <>
            <ProductsCart items={newLaunches} category='New Launches' />
        </>
    )
}

export default NewLaunches