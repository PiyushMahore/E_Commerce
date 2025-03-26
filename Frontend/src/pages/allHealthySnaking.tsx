import ProductCategory from '@/components/ui/productCategory';
import { useState } from 'react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

function AllHealthySnaking() {
    const [healthySnacking] = useState([
        {
            img: 'https://www.farmley.com/cdn/shop/files/panchmeva-80_300x.jpg?v=1715172755',
            mrp: 549.00,
            disPrice: 469.00,
            itemName: 'Panchmeva - Dry Fruits Mix (405g)'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/CranberryandApricots_400x.jpg?v=1715068505',
            mrp: 609.00,
            disPrice: 585.00,
            itemName: 'Dried Apricots (200 g) & Dried Cranberry (200 g)'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/PeriPeriSnackMixandDateBites_400x.jpg?v=1715072274',
            mrp: 949.00,
            disPrice: 799.00,
            itemName: 'Peri - Peri Party Mix (405 g) + Date Bites (180 g)'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/71fvY4ZjalL._SX679_400x.jpg?v=1739541581',
            mrp: 400.00,
            disPrice: 345.00,
            itemName: 'Date Bites - No Added Sugar'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/snackmixperiperi_400x.jpg?v=1715079659',
            mrp: 559.00,
            disPrice: 549.00,
            itemName: 'Peri Peri Snack Mix'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/PanchmevaandPeriPeriSnackMix_400x.jpg?v=1715071303',
            mrp: 1068.00,
            disPrice: 899.00,
            itemName: 'Peri - Peri Party Mix (405 g) & Panchmeva (405 g)'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/BerryMixFarmley_400x.jpg?v=1715065853',
            mrp: 349.00,
            disPrice: 292.00,
            itemName: 'Berry Mix (200g)'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/SnackMixesFarmleyAssorted_400x.jpg?v=1715071033',
            mrp: 1656.00,
            disPrice: 1399.00,
            itemName: 'Combo - Peri - Peri Party Mix(405 g) + Thai Chilli Cashews(200 g) + Black Pepper Cashews(200 g) + Berry Mix(200 g)'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/ApricotFOP_400x.jpg?v=1715068560',
            mrp: 349.00,
            disPrice: 299.00,
            itemName: 'Dried Turkish Apricots (200g)'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/OmaniDates_400x.jpg?v=1715071727',
            mrp: 299.00,
            disPrice: 297.00,
            itemName: 'Omani Fard Dates (400g)'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/BlackPepperCashew_400x.jpg?v=1715079126',
            mrp: 299.00,
            disPrice: 279.00,
            itemName: 'Black Pepper Cashews - Roasted (160g)'
        }, {
            img: 'https://www.farmley.com/cdn/shop/files/Artboard1copy11-80_1_400x.jpg?v=1715070947',
            mrp: 279.00,
            disPrice: 299.00,
            itemName: 'Classic Salted Cashews - Roasted (160g)'
        }
    ]);
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