import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FC, useEffect, useState } from "react"

interface Products {
    _id: string;
    images: string[];
    mrp: number;
    sellingPrice: number;
    title: string;
    options: string[];
}

interface ProductsCartProps {
    items: Products[];
}

const ProductsCart: FC<ProductsCartProps> = ({ items }) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth < 768)

    useEffect(() => {
        const setWidth = () => {
            setScreenWidth(window.innerWidth < 768);
        }

        window.addEventListener('resize', setWidth)

        return () => {
            window.removeEventListener('resize', setWidth);
        }
    }, [])

    return (
        <Carousel opts={{ align: "start", slidesToScroll: !screenWidth ? 3 : 1, watchDrag: !screenWidth ? false : true }} className="w-full max-w-screen" >
            <CarouselContent className="flex items-stretch mx-0">
                {items && items.map((item, index) => (
                    <CarouselItem key={index} className="basis-[15rem] md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 px-0">
                        <div className="p-0">
                            <Card className="rounded-sm px-2.5">
                                <CardContent className="flex flex-col gap-6 aspect-square justify-start px-6 h-[350px]">
                                    <div className="p-4 relative">
                                        <div className="bg-green-500 px-3 text-xs text-white font-semibold py-1 rounded-r-sm absolute -left-9 -top-0">
                                            Save Rs. {item.mrp - item.sellingPrice}
                                        </div>
                                        {
                                            item.options.length > 0 ?
                                                <a href={`/products/${item._id}`}>
                                                    <img src={item?.images[0]} alt="" />
                                                </a>
                                                :
                                                <img src={item?.images[0]} alt="" />
                                        }
                                    </div>
                                    <CardTitle>
                                        <a href={`/products/${item._id}`}>
                                            {item.title}
                                        </a>
                                    </CardTitle>
                                    <div className="flex justify-between items-start w-full">
                                        <CardTitle className="text-green-400 font-semibold ">From Rs.<br />{item.sellingPrice}</CardTitle>
                                        <CardTitle className="text-xs line-through">Rs.<br />{item.mrp}</CardTitle>
                                    </div>
                                </CardContent>
                                <div className="w-full text-center px-2">
                                    <Button className="w-full rounded-none text-xs cursor-pointer bg-[#283b53] hover:bg-[#547192] px-12 transition-colors ease-in-out duration-300">
                                        {
                                            item.options.length > 0 ?
                                                <a href={`/products/${item._id}`} className="text-xs text-white">
                                                    Choose Options
                                                </a>
                                                :
                                                <span className="text-xs text-white">
                                                    Add to Cart
                                                </span>
                                        }
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            {!screenWidth ?
                <>
                    <CarouselPrevious className="absolute -left-5 p-5" />
                    <CarouselNext className="absolute -right-5 p-5" />
                </> :
                null
            }
        </Carousel>
    )
}

export default ProductsCart