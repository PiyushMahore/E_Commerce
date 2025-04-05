import ProductCategory from '@/components/ui/productCategory';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useEffect } from 'react';
import { useProducts } from '@/context/productContextProvider';

function BestSellers() {
    const products = useProducts()
    useEffect(() => {
        products?.getAllProduct();
    }, [])

    return (
        <div className='lg:px-16 px-0.5 lg:mt-0 mt-24'>
            <Breadcrumb className='my-4 hidden lg:block'>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Best Sellers</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <ProductCategory category='Best Sellers' products={products?.products} />
        </div>
    )
}

export default BestSellers;