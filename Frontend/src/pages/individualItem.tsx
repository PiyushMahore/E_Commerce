import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";
import NumberImput from "@/components/ui/numberImput"
import { useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

function IndividualItem() {
    const [quantity, setQuantity] = useState(1);
    const [selectedImg, setSelectedImg] = useState('https://www.farmley.com/cdn/shop/files/71fvY4ZjalL._SX679_600x.jpg?v=1739541581');

    const images = [
        'https://www.farmley.com/cdn/shop/files/71fvY4ZjalL._SX679_600x.jpg?v=1739541581',
        'https://www.farmley.com/cdn/shop/files/Datebite2_0.8x-20_700x.jpg?v=1739541581',
        'https://www.farmley.com/cdn/shop/files/Datebite_usecase001_700x.jpg?v=1739541581',
        'https://www.farmley.com/cdn/shop/files/classic_delight_DB_pk_700x.jpg?v=1739541581',
        'https://www.farmley.com/cdn/shop/files/Date_bites_Pack_of_2_700x.jpg?v=1739541581',
        'https://www.farmley.com/cdn/shop/files/Veg-logo_34d4f955-aaf9-4275-838e-f9d5b0c699df_700x.jpg?v=1739541581'
    ];

    return (
        <div className='px-16'>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/allProducts">All Products</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Dry Fruit</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className='w-full my-5 flex gap-8 text-[#283b53]'>
                <div className='w-1/2 shadow border px-5 py-7 flex'>
                    <ScrollArea className="h-[500px] w-1/6 rounded-md">
                        <div className="grid gap-2 p-0.5">
                            {images.map((image) => (
                                <div className={`${selectedImg == image ? "border border-gray-950" : "border-none"} transition-all duration-300 h-[85px] w-[85px] p-0.5`}>
                                    <img onClick={() => setSelectedImg(image)} className={`w-full h-full bg-cover bg-center`} src={image} alt="" />
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                    <div className="w-4/5 flex items-center justify-center ml-6">
                        <img className="w-full bg-cover bg-center" src={selectedImg} alt="" />
                    </div>
                </div>
                <div className='w-1/2 h-fit shadow border px-5 py-7 flex gap-6 flex-col'>
                    <div className='grid gap-3.5'>
                        <h1 className='text-2xl font-semibold'>
                            Panchmeva - Dry Fruits Mix (405g)
                        </h1>
                        <div className='bg-[#008a00] text-xs px-2.5 py-0.5 rounded-[4px] w-fit text-white font-semibold'>
                            Save Rs. 80.00
                        </div>
                    </div>
                    <hr />
                    <div className='grid gap-3'>
                        <p>
                            Size: Panchmeva Jar - 405 g
                        </p>
                        <div className='flex gap-3'>
                            <div className='border border-gray-500 px-4 py-1.5 rounded-[5px]'>
                                Panchmeva Jar - 405 g
                            </div>
                            <div className='border border-gray-500 px-4 py-1.5 rounded-[5px]'>
                                Pack of 3 (405 g each)
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="grid gap-3">
                            <div>
                                <h4>
                                    M.R.P:
                                </h4>
                            </div>
                            <div>
                                <h4>
                                    Offer Price:
                                </h4>
                            </div>
                            <div className="mt-1.5">
                                <h4>
                                    Quantity:
                                </h4>
                            </div>
                        </div>
                        <div className="grid gap-3">
                            <div>
                                <h4 className='line-through'>
                                    Rs. 549.00
                                </h4>
                            </div>
                            <div className="mt-2">
                                <h4 className='flex items-center gap-3.5'>
                                    <span className='text-2xl text-[#008a00]'>
                                        Rs. 469.00
                                    </span>
                                    (incl. of all taxes)
                                </h4>
                            </div>
                            <div className="mt-1.5">
                                <NumberImput value={quantity} setQuantity={setQuantity} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center overflow-hidden gap-3.5">
                        <Button className="w-1/2 rounded-none py-6 bg-[#283b53] hover:bg-[#3d5473] transition-colors duration-300">
                            Add to cart
                        </Button>
                        <Button className="w-1/2 rounded-none py-6 bg-[#283b53] hover:bg-[#3d5473] transition-colors duration-300">
                            BUY IT NOW
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualItem