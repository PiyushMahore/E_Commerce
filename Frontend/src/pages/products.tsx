import { Button } from "@/components/ui/button"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react"

function Products() {
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
        <div className="w-full md:h-screen py-12 pl-6 flex justify-center items-start gap-6 flex-col md:px-14 overflow-hidden">
            <h3 className="text-xl font-semibold">Products of the Month</h3>
            <Carousel opts={{ align: "start", slidesToScroll: !screenWidth ? 6 : 1 }} className="w-full max-w-screen" >
                <CarouselContent className="mx-0">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <CarouselItem key={index} className="basis-[15rem] md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6 px-0">
                            <div className="p-0">
                                <Card className="rounded-sm px-2.5">
                                    <CardContent className="flex flex-col gap-6 aspect-square items-start justify-center p-6">
                                        <div className="p-4 relative">
                                            <div className="bg-green-500 px-3 text-xs text-white font-semibold py-1 rounded-r-sm absolute -left-9 -top-6">
                                                Save Rs. 55.00
                                            </div>
                                            <img src="https://www.farmley.com/cdn/shop/files/71fvY4ZjalL._SX679_300x.jpg?v=1739541581" alt="" />
                                        </div>
                                        <CardTitle>Date Bites - No Added Sugar</CardTitle>
                                        <div className="flex justify-between items-start w-full">
                                            <CardTitle className="text-green-400 font-semibold ">From Rs.<br />345.00</CardTitle>
                                            <CardTitle className="text-xs line-through">Rs.<br />400.00</CardTitle>
                                        </div>
                                    </CardContent>
                                    <div className="w-full text-center mt-6">
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

export default Products