import React, { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

function Hero() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth < 640);
    const plugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
    const mobileImgs = [{
        imgSrc: "https://www.farmley.com/cdn/shop/files/date-bite--wth-rd-80_700x.jpg?v=1715252163"
    }, {
        imgSrc: "https://www.farmley.com/cdn/shop/files/party_mix-80_700x.jpg?v=1715067169"
    }, {
        imgSrc: "https://www.farmley.com/cdn/shop/files/turkish_apricot-80_700x.jpg?v=1715067223"
    }, {
        imgSrc: "https://www.farmley.com/cdn/shop/files/chia_seeds_farmley_700x.jpg?v=1715067287"
    }, {
        imgSrc: "https://www.farmley.com/cdn/shop/files/omani-dates-rd-80_700x.jpg?v=1715252204"
    }];

    const webImgs = [{
        imgSrc: "https://www.farmley.com/cdn/shop/files/rd_with_date_bites-80_2000x.jpg?v=1715246493"
    }, {
        imgSrc: "https://www.farmley.com/cdn/shop/files/rd_with_snack_mix-80_2000x.jpg?v=1715246522"
    }, {
        imgSrc: "https://www.farmley.com/cdn/shop/files/Farmley_Cranberry_Apricots_2000x.png?v=1715062209"
    }, {
        imgSrc: "https://www.farmley.com/cdn/shop/files/Artboard_1_copy_5-100_2000x.jpg?v=1715062384"
    }, {
        imgSrc: "https://www.farmley.com/cdn/shop/files/Artboard_1_copy_17-100_2000x.jpg?v=1715062545"
    }];

    useEffect(() => {
        const detectSize = () => {
            setScreenWidth(window.innerWidth < 640);
        }

        window.addEventListener('resize', detectSize);

        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [])

    return (
        <Carousel opts={{ align: "start", loop: true, slidesToScroll: "auto" }} plugins={[plugin.current]} className="w-full transition-all duration-300">
            <CarouselContent>
                {
                    !screenWidth ? webImgs.map((img, index) => (
                        <CarouselItem className="pl-0" key={index}>
                            <div>
                                <Card className="p-0">
                                    <img className="bg-cover bg-center w-full h-full" src={img.imgSrc} alt="" />
                                </Card>
                            </div>
                        </CarouselItem>
                    ))
                        :
                        mobileImgs.map((img, index) => (
                            <CarouselItem className="pl-0" key={index}>
                                <div>
                                    <Card className="p-0">
                                        <img src={img.imgSrc} alt="" />
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))
                }
            </CarouselContent>
            {!screenWidth
                ?
                <>
                    <CarouselNext className="absolute right-2" />
                    <CarouselPrevious className="absolute left-2" />
                </>
                :
                null
            }
        </Carousel>
    )
}

export default Hero