import ProductCategory from '@/components/ui/productCategory';
import { useEffect, useState } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useProducts } from '@/context/productContextProvider';

function Combos() {
    const [combos, setCombos] = useState<any>(null);
    const product = useProducts();

    useEffect(() => {
        product?.getAllProduct();
    }, [])

    useEffect(() => {
        setCombos(product?.products?.filter((product: any) => product.category == "Combos"));
    }, [product?.products])
    return (
        <div className='lg:px-16 px-0.5 lg:mt-0 mt-24'>
            <Breadcrumb className='my-4 hidden lg:block'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Combos</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <ProductCategory category='Combos' products={combos} />
        </div>
    )
}

export default Combos