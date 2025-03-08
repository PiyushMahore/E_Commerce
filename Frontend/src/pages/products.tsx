// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardTitle } from "@/components/ui/card"
// import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
// import { useEffect, useState } from "react"
// import { GoArrowRight } from "react-icons/go";

import ProductsCart from "../components/productsCard"

function Products() {
    // const [screenWidth, setScreenWidth] = useState(window.innerWidth < 768)

    // useEffect(() => {
    //     const setWidth = () => {
    //         setScreenWidth(window.innerWidth < 768);
    //     }

    //     window.addEventListener('resize', setWidth)

    //     return () => {
    //         window.removeEventListener('resize', setWidth);
    //     }
    // }, [])

    const productsOfTheMonth = [
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
    ]

    return (
        // <div className="w-full md:h-screen py-12 pl-6 flex justify-center items-start gap-6 flex-col md:px-14 overflow-hidden">
        //     <div className="flex justify-between w-full items-center text-sm overflow-hidden">
        //         <h3 className="text-xl font-semibold">{prop.category}</h3>
        //         <div className="pr-5 md:pr-0 flex items-center gap-2 md:translate-x-7 md:hover:translate-x-0 transition-all duration-500">
        //             <h5>View All</h5>
        //             <GoArrowRight className="md:block hidden" size={20} />
        //         </div>
        //     </div>
        //     <Carousel opts={{ align: "start", slidesToScroll: !screenWidth ? 3 : 1, watchDrag: !screenWidth ? false : true }} className="w-full max-w-screen" >
        //         <CarouselContent className="flex items-stretch mx-0">
        //             {prop.items.map((_, index) => (
        //                 <CarouselItem key={index} className="basis-[15rem] md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 px-0">
        //                     <div className="p-0">
        //                         <Card className="rounded-sm px-2.5">
        //                             <CardContent className="flex flex-col gap-6 aspect-square justify-start px-6 h-[350px]">
        //                                 <div className="p-4 relative">
        //                                     <div className="bg-green-500 px-3 text-xs text-white font-semibold py-1 rounded-r-sm absolute -left-9 -top-0">
        //                                         Save Rs. {_.mrp - _.disPrice}
        //                                     </div>
        //                                     <img src={_.img} alt="" />
        //                                 </div>
        //                                 <CardTitle>{_.itemName}</CardTitle>
        //                                 <div className="flex justify-between items-start w-full">
        //                                     <CardTitle className="text-green-400 font-semibold ">From Rs.<br />{_.disPrice}</CardTitle>
        //                                     <CardTitle className="text-xs line-through">Rs.<br />{_.mrp}</CardTitle>
        //                                 </div>
        //                             </CardContent>
        //                             <div className="w-full text-center">
        //                                 <Button className="rounded-none text-xs bg-[#283b53] hover:bg-[#547192] px-12 transition-colors ease-in-out duration-300">Choose Options</Button>
        //                             </div>
        //                         </Card>
        //                     </div>
        //                 </CarouselItem>
        //             ))}
        //         </CarouselContent>
        //         {!screenWidth ?
        //             <>
        //                 <CarouselPrevious className="absolute -left-5 p-5" />
        //                 <CarouselNext className="absolute -right-5 p-5" />
        //             </> :
        //             null
        //         }
        //     </Carousel>
        // </div>
        <>
            <ProductsCart category='Products Of The Month' items={productsOfTheMonth} />
        </>
    )
}

export default Products