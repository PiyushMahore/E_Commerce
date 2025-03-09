import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { FC, useEffect, useState } from "react"
import { GoArrowRight } from "react-icons/go";

interface Products {
    img: string;
    mrp: number;
    disPrice: number;
    itemName: string;
}

interface ProductsCartProps {
    items: Products[];
    category: string;
}

const ProductsCart: FC<ProductsCartProps> = ({ items, category }) => {
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
        <div className="w-full py-8 pl-6 flex justify-center items-start gap-6 flex-col md:px-14 overflow-hidden">
            <div className="flex justify-between w-full items-center text-sm overflow-hidden">
                <h3 className="text-xl font-semibold">{category}</h3>
                <div className="pr-5 md:pr-0 flex items-center gap-2 md:translate-x-7 md:hover:translate-x-0 transition-all duration-500">
                    <h5>View All</h5>
                    <GoArrowRight className="md:block hidden" size={20} />
                </div>
            </div>
            <Carousel opts={{ align: "start", slidesToScroll: !screenWidth ? 3 : 1, watchDrag: !screenWidth ? false : true }} className="w-full max-w-screen" >
                <CarouselContent className="flex items-stretch mx-0">
                    {items.map((_, index) => (
                        <CarouselItem key={index} className="basis-[15rem] md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 px-0">
                            <div className="p-0">
                                <Card className="rounded-sm px-2.5">
                                    <CardContent className="flex flex-col gap-6 aspect-square justify-start px-6 h-[350px]">
                                        <div className="p-4 relative">
                                            <div className="bg-green-500 px-3 text-xs text-white font-semibold py-1 rounded-r-sm absolute -left-9 -top-0">
                                                Save Rs. {_.mrp - _.disPrice}
                                            </div>
                                            <img src={_.img} alt="" />
                                        </div>
                                        <CardTitle>{_.itemName}</CardTitle>
                                        <div className="flex justify-between items-start w-full">
                                            <CardTitle className="text-green-400 font-semibold ">From Rs.<br />{_.disPrice}</CardTitle>
                                            <CardTitle className="text-xs line-through">Rs.<br />{_.mrp}</CardTitle>
                                        </div>
                                    </CardContent>
                                    <div className="w-full text-center">
                                        <Button className="rounded-none text-xs bg-[#283b53] hover:bg-[#547192] px-12 transition-colors ease-in-out duration-300">Choose Options</Button>
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
        </div>
    )
}

export default ProductsCart