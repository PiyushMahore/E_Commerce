import ProductCategory from '@/components/ui/productCategory';
import { useEffect, useState } from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { useProducts } from '@/context/productContextProvider';

function AllNewLaunches() {
    const product = useProducts();
    const [newLaunches, setNewLaunches] = useState<any>(null);

    useEffect(() => {
        product?.getAllProduct();
    }, [])

    useEffect(() => {
        setNewLaunches(product?.products?.filter((product: any) => product.category == "new launches"))
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
                        <BreadcrumbPage>New launches</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <ProductCategory category='New launches' products={newLaunches} />
        </div>
    )
}

export default AllNewLaunches