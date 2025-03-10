import React, { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { GrDeliver } from "react-icons/gr";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
import { GiReturnArrow } from "react-icons/gi";


function Feature() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth < 700);
    const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    useEffect(() => {
        const detectSize = () => {
            setScreenWidth(window.innerWidth < 700);
        }

        window.addEventListener('resize', detectSize);

        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [])

    const featurs = [
        { tag: <GrDeliver size={30} />, text: "Free Home Delivery Across India" },
        { tag: <GiReturnArrow size={30} />, text: "7 Day Return If You're Not Happy" },
        { tag: <IoIosLeaf size={30} />, text: "100% Clean, Nutritious Products" },
        { tag: <FaHandHoldingHeart size={30} />, text: "Enabled by 5000+ Farmers" }
    ];

    return (
        <div className='pb-12 pt-7'>
            {!screenWidth
                ?
                <span className="grid px-16 sm:grid-cols-2 sm:justify-items-center sm:gap-7 lg:grid-cols-4 justify-between text-xs">
                    <div className='flex items-start gap-1.5'>
                        <GrDeliver size={30} />
                        <p>Free Home Delivery Across India</p>
                    </div>
                    <div className='flex items-start gap-1.5'>
                        <GiReturnArrow size={30} />
                        <p>7 Day Return If You're Not Happy</p>
                    </div>
                    <div className='flex items-start gap-1.5'>
                        <IoIosLeaf size={30} />
                        <p>100% Clean, Nutritious Products</p>
                    </div>
                    <div className='flex items-start gap-1.5'>
                        <FaHandHoldingHeart size={30} />
                        <p>Enabled by 5000+ Farmers</p>
                    </div>
                </span>
                :
                <Carousel opts={{ align: "start", loop: true, slidesToScroll: "auto" }} plugins={[plugin.current]} className="w-full transition-all duration-300">
                    <CarouselContent>
                        {
                            featurs.map((featur, index) => (
                                <CarouselItem className="pl-0" key={index}>
                                    <Card className="p-0 flex justify-center items-center shadow-none border-none gap-5">
                                        {featur.tag}
                                        <p>{featur.text}</p>
                                    </Card>

                                </CarouselItem>
                            ))
                        }
                    </CarouselContent>
                    <CarouselNext className="absolute right-4" />
                    <CarouselPrevious className="absolute left-4" />
                </Carousel>
            }
        </div>
    )
}

export default Feature;