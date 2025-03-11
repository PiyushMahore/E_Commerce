import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import NumberImput from "@/components/ui/numberImput"
import { useState } from "react"

function IndividualItem() {
    const [quantity, setQuantity] = useState(1);

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
                <div className='w-1/2 border border-gray-500'>
                </div>
                <div className='w-1/2 border border-gray-500 p-4 flex gap-6 flex-col'>
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
                    <div className='flex gap-3'>
                        <div className='grid gap-4 self-start'>
                            <h4>
                                M.R.P:
                            </h4>
                            <h4>
                                Offer Price:
                            </h4>
                            <h4>
                                Quantity:
                            </h4>
                        </div>
                        <div className='grid gap-4'>
                            <h4 className='line-through'>
                                Rs. 549.00
                            </h4>
                            <h4 className='flex items-center gap-3.5'>
                                <span className='text-2xl text-[#008a00]'>
                                    Rs. 469.00
                                </span>
                                (incl. of all taxes)
                            </h4>
                            <NumberImput value={quantity} setQuantity={setQuantity} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualItem