import { IoListOutline } from "react-icons/io5";
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FC } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "./button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport } from "@/components/ui/navigation-menu"

interface product {
    img: string;
    mrp: number;
    disPrice: number;
    itemName: string;
}

interface props {
    category: string;
    products: product[];
}

const ProductCategory: FC<props> = ({ category, products }) => {
    return (
        <div className="w-full flex justify-between">
            <div className="w-[20%] border h-fit p-6">
                <h3 className="text-xl font-semibold">Filters</h3>
            </div>
            <div className="border w-[78%]">
                <div className="p-7 grid gap-3 border-b">
                    <h3 className="text-2xl font-semibold">{category}</h3>
                    <div className="flex justify-between text-xs">
                        <div className="flex gap-16 items-center">
                            <span>Showing 1 - 16 of 16 products</span>
                            <span className="flex items-center gap-2">Display: 24 per page <FaAngleDown size={11} /></span>
                        </div>
                        <div className="flex gap-16 items-center">
                            <span className="flex items-center gap-2">Sort by: Featured <FaAngleDown size={11} /></span>
                            <span className="flex items-center gap-2">View <IoListOutline size={28} /> <BsGrid3X3GapFill size={20} /></span>
                        </div>
                    </div>
                </div>

                <div className="grid items-stretch justify-center mx-0 w-full grid-cols-4">
                    {
                        products && products.map((product, idx) => (
                            <div key={idx} className="p-0 w-auto">
                                <Card className="rounded-none">
                                    <CardContent className="flex flex-col aspect-square justify-between h-[290px]">
                                        <div className="relative p-3 flex justify-center items-center">
                                            <div className="bg-green-500 px-3 text-xs text-white font-semibold py-1 rounded-r-sm absolute -left-6 -top-0">
                                                Save Rs. {product.mrp - product.disPrice}
                                            </div>
                                            <img className="h-36" src={product.img} alt="" />
                                        </div>
                                        <CardTitle className="text-xs">{product.itemName}</CardTitle>
                                        <div className="flex items-start w-full justify-between">
                                            <CardTitle className="text-green-400 font-semibold text-lg">From Rs. {product.disPrice}</CardTitle>
                                            <CardTitle className="text-xs line-through">Rs.<br />{product.mrp}</CardTitle>
                                        </div>
                                        <div className="w-full text-center">
                                            <Button className="w-full rounded-none text-xs bg-[#283b53] hover:bg-[#547192] px-12 transition-colors ease-in-out duration-300">Choose Options</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default ProductCategory