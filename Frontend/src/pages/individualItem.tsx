import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button";
import NumberImput from "@/components/ui/numberImput"
import { useEffect, useState } from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useProducts } from "@/context/productContextProvider";

interface productData {
    images: string[];
    title: string;
    mrp: number;
    sellingPrice: number;
    options: string[];
}

function IndividualItem() {
    const products = useProducts();
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState<productData | null>(null);
    const [size, setSize] = useState<string | null>(null);
    const [selectedImg, setSelectedImg] = useState<string | "">("");

    useEffect(() => {
        products?.getAllProduct();
    }, [])

    useEffect(() => {
        setProduct(products?.products?.data[0]);
        setSize(products?.products?.data[0]?.options[0]);
        setSelectedImg(products?.products?.data[0].images[0]);
    }, [products?.products?.data])

    return (
        <div className='lg:px-16 px-3 max-w-screen'>
            <Breadcrumb className="hidden lg:block">
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
            <div className='w-full my-5 flex gap-8 text-[#283b53] lg:flex-row flex-col'>
                <div className="lg:w-1/2 w-full grid gap-5">
                    <div className='w-full shadow border lg:px-5 lg:py-7 flex lg:flex-row flex-col-reverse lg:gap-0 gap-3'>
                        <ScrollArea className="lg:h-[500px] lg:w-1/6 rounded-md w-full h-auto">
                            <div className="lg:grid gap-2 flex">
                                {product?.images.map((image: string) => (
                                    <div className={`${selectedImg == image ? "border border-gray-950" : "border-none"} transition-all duration-300 sm:h-[75px] sm:w-[75px] xl:h-[85px] xl:w-[85px]`}>
                                        <img onClick={() => setSelectedImg(image)} className={`w-full h-full bg-cover bg-center p-0.5`} src={image} alt="" />
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                        <div className="lg:w-4/5 flex items-center justify-center lg:ml-6">
                            {selectedImg?.match(/\.(mp4|webm|ogg)$/) ?
                                <video controls className="w-full h-full object-cover">
                                    <source src={selectedImg} />
                                    Your browser does not support the video tag.
                                </video>
                                :
                                <img className="w-full bg-cover bg-center" src={selectedImg} alt="" />}
                        </div>
                    </div>

                    <div className='w-full shadow border lg:px-7 px-2 py-7 flex flex-col gap-6'>
                        <h3 className="font-semibold text-xl text-[#283b53]">Description</h3>
                        <ul className="flex gap-2.5 flex-col text-sm text-[#282b53] list-disc px-5">
                            <li className="leading-loose">
                                Introducing Farmley's Date Bites, a delectable dessert crafted from 6 wholesome ingredients - Almonds, Dates, Pista, Cashews, Honey & Ghee.
                            </li>
                            <li className="leading-loose">
                                These bites have no added sugar, offering a guilt-free indulgence.
                            </li>
                            <li className="leading-loose">
                                Packaged for convenience, they're easy to carry, making them an ideal on-the-go snack.
                            </li>
                            <li className="leading-loose">
                                Made from Farmley's signature dry fruits and nuts, each bite is a powerhouse of nutrition.
                            </li>
                            <li className="leading-loose">
                                Whether as a dessert or a quick pick-me-up snack or a sweet yet healthy gifting option, these Date Bites deliver a perfect balance of health and taste.
                            </li>
                        </ul>
                        <div className="text-sm text-[#282b53] grid gap-4 mt-4">
                            <p>
                                Country Of Origin : India
                            </p>
                            <p>
                                MRP (Inc. of all taxes) : 400.00 each 180g Jar (10 N x 18g each in Jar)
                            </p>
                            <p>
                                Shelf Life : 6 Months
                            </p>
                            <p>
                                Ingredients : Wet dates, Cashewnut kernels, Almond kernels, Pistachio kernels, Honey, Desi ghee
                            </p>
                            <p>
                                Processed, Packed & Marketed by : Connedit Business Solutions Pvt. Ltd.
                            </p>
                            <p>
                                Khasra No. 17/2/2 & 3, 51/1/2 Kaji Palasiya, Indore Madhya Pradesh - 452001
                            </p>
                        </div>
                    </div>
                </div>

                <div className='lg:w-1/2 h-fit shadow border px-5 py-9 flex gap-7 flex-col sticky top-36'>
                    <div className='grid gap-4'>
                        <h1 className='text-2xl font-semibold'>
                            {product?.title}
                        </h1>
                        <div className='bg-[#008a00] text-xs px-2.5 py-0.5 rounded-[4px] w-fit text-white font-semibold'>
                            Save Rs. {(product?.mrp && product?.sellingPrice !== undefined) ? (product.mrp - product.sellingPrice).toFixed(2) : "0.00"}
                        </div>
                    </div>
                    <hr />
                    {size && <div className='grid gap-4'>
                        <p>
                            Size: {size}
                        </p>

                        <div className='flex gap-3'>
                            {
                                product?.options?.map((option: string) => {
                                    return (
                                        <div onClick={() => setSize(option)} className={`${size == option ? "border-2" : ""} cursor-pointer border border-gray-500 px-4 py-1.5 rounded-[5px]`}>
                                            {option}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>}
                    <div className="flex gap-4">
                        <div className="grid gap-4">
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
                        <div className="grid gap-4">
                            <div>
                                <h4 className='line-through'>
                                    Rs. {(product?.mrp)?.toFixed(2)}
                                </h4>
                            </div>
                            <div className="mt-2">
                                <h4 className='flex items-center gap-3.5'>
                                    <span className='text-2xl text-[#008a00]'>
                                        Rs. {(product?.sellingPrice)?.toFixed(2)}
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
        </div >
    )
}

export default IndividualItem