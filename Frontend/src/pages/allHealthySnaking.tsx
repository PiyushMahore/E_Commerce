import ProductCategory from '@/components/ui/productCategory';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useEffect, useState } from 'react';
import { useProducts } from '@/context/productContextProvider';

function AllHealthySnaking() {
    const product = useProducts();
    const [healthySnacking, setHealthySnacking] = useState<any>(null);
    useEffect(() => {
        product?.getAllProduct();
    }, [])

    useEffect(() => {
        setHealthySnacking(product?.products?.filter((product: any) => product.category == "Healthy Yummy Snacking"))
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
                        <BreadcrumbPage>Wholesome Mixes for Anytime Snacking</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            <ProductCategory category='Wholesome Mixes for Anytime Snacking' products={healthySnacking} />
        </div>
    )
}

export default AllHealthySnaking;