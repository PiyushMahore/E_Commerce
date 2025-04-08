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

function ExotixRange() {
    const products = useProducts();
    const [exoticRange, setExoticRange] = useState<any>(null);

    useEffect(() => {
        if (!products?.products) {
            products?.getAllProduct();
        }

        setExoticRange(products?.products?.filter((product: any) => product.category == "Exotic Range"))
    }, [products?.products])
    return (
        <div className='lg:px-16 px-0.5 lg:mt-0 mt-24'>
            <Breadcrumb className='my-4 hidden lg:block'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Exotic Fruits & Berries</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <ProductCategory category='Exotic Fruits & Berries' products={exoticRange} />
        </div>
    )
}

export default ExotixRange