import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FC, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "./button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { LiaFilterSolid } from "react-icons/lia";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { PiListBulletsBold } from "react-icons/pi";
import { NavLink } from "react-router";

interface product {
    _id: string;
    images: string;
    mrp: number;
    sellingPrice: number;
    title: string;
    options: string[];
}

interface props {
    category: string;
    products: product[];
}

const ProductCategory: FC<props> = ({ category, products }) => {
    const [view, setView] = useState("grid");
    return (
        <div className="w-full flex justify-between lg:flex-row flex-col">
            <div className="lg:w-[20%] border h-fit p-6 lg:grid gap-2.5 hidden">
                <h3 className="text-xl font-semibold">Filters</h3>
                <Accordion type="single" collapsible>
                    <AccordionItem className="text-sm border-none" value="item-1">
                        <AccordionTrigger className="hover:no-underline py-2 flex justify-start items-end gap-2">Avalability</AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-4 justify-center mt-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    In stock (41)
                                </label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Out of stock (4)
                                </label>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className="text-sm border-none" value="item-2">
                        <AccordionTrigger className="hover:no-underline py-2 flex justify-start items-end gap-2">Price</AccordionTrigger>
                        <AccordionContent className="py-1">
                            <Slider className="py-1.5" defaultValue={[33]} max={100} step={1} />
                            <div className="flex gap-4 justify-between items-center mt-4">
                                <div className="border w-1/2">
                                    <input className="p-2 text-end w-full placeholder:font-bold focus:outline-none" type="number" min={0} max={2160} placeholder="0" />
                                    <p className="absolute -translate-y-7 translate-x-2">₹</p>
                                </div>
                                -
                                <div className="border w-1/2">
                                    <input className="p-2 text-end w-full placeholder:font-bold focus:outline-none" type="number" min={0} max={2160} placeholder="0" />
                                    <p className="absolute -translate-y-7 translate-x-2">₹</p>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>

            <div className="border lg:w-[78%] w-full">
                <div className="pt-6 lg:pb-4 lg:px-7 grid gap-3 border-b">
                    <h3 className="text-2xl font-semibold lg:px-0 px-5">{category}</h3>
                    <p className="text-xs lg:hidden px-5">{products?.length} Products</p>
                    <div className="flex justify-between text-xs">
                        <div className="lg:flex gap-16 items-center hidden">
                            <span>Showing 1 - {products?.length} products</span>
                        </div>
                        <div className="flex gap-16 items-center justify-between w-full lg:w-fit lg:border-none border py-2 px-5 lg:px-3">
                            <Sheet>
                                <SheetTrigger className="lg:hidden flex gap-2 items-center">
                                    <LiaFilterSolid size={22} />Filter
                                </SheetTrigger>
                                <SheetContent className="w-[85%]">
                                    <SheetHeader className="pb-0">
                                        <SheetTitle className="text-2xl">Filters</SheetTitle>
                                    </SheetHeader>
                                    <SheetDescription className="text-[#283b53]">
                                        <div className="border px-4 py-2 text-gray-500 font-semibold">
                                            Filters
                                        </div>
                                        <Accordion type="single" collapsible>
                                            <AccordionItem className="text-lg px-4 py-1.5 border-b" value="item-1">
                                                <AccordionTrigger className="hover:no-underline py-2 flex justify-start items-center gap-2">Avalability</AccordionTrigger>
                                                <AccordionContent className="flex flex-col gap-4 justify-center mt-2">
                                                    <div className="flex items-center space-x-2">
                                                        <Checkbox id="terms" />
                                                        <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                            In stock (41)
                                                        </label>
                                                    </div>
                                                    <div className="flex items-center space-x-2">
                                                        <Checkbox id="terms" />
                                                        <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                                            Out of stock (4)
                                                        </label>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                            <AccordionItem className="text-lg px-4 py-1.5 border-b" value="item-2">
                                                <AccordionTrigger className="hover:no-underline py-2 flex justify-start items-center gap-2">Price</AccordionTrigger>
                                                <AccordionContent className="py-1">
                                                    <div className="flex gap-4 justify-between items-center">
                                                        <div className="border w-1/2">
                                                            <input className="p-2 text-end w-full placeholder:font-bold text-lg focus:outline-none" type="text" name="" id="" placeholder="0" />
                                                            <p className="text-lg absolute -translate-y-9 translate-x-2">₹</p>
                                                        </div>
                                                        -
                                                        <div className="border w-1/2">
                                                            <input className="p-2 text-end w-full placeholder:font-bold text-lg focus:outline-none" type="text" name="" id="" placeholder="0" />
                                                            <p className="text-lg absolute -translate-y-9 translate-x-2">₹</p>
                                                        </div>
                                                    </div>
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    </SheetDescription>
                                </SheetContent>
                            </Sheet>

                            <div className="lg:block hidden">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="cursor-pointer">
                                        <span className="flex items-center gap-2">Sort by:<span className="lg:block hidden">Featured</span><FaAngleDown size={11} /></span>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="mt-2 ml-4 py-2">
                                        <DropdownMenuItem className="cursor-pointer">
                                            <div className="px-5">
                                                Featured
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer">
                                            <div className="px-5">
                                                Best Selling
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer">
                                            <div className="px-5">
                                                Alphabatically, A-Z
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer">
                                            <div className="px-5">
                                                Alphabatically, Z-A
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer">
                                            <div className="px-5">
                                                Price, low to high
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer">
                                            <div className="px-5">
                                                Price, high to low
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer">
                                            <div className="px-5">
                                                Date, old to new
                                            </div>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="cursor-pointer">
                                            <div className="px-5">
                                                Date, new to old
                                            </div>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="lg:hidden">
                                <Drawer>
                                    <DrawerTrigger>
                                        <span className="flex items-center gap-2">Sort by:<span className="lg:block hidden">Featured</span><FaAngleDown size={11} /></span>
                                    </DrawerTrigger>
                                    <DrawerContent>
                                        <DrawerHeader>
                                            <DrawerTitle className="pb-3">Sort By</DrawerTitle>
                                            <hr />
                                        </DrawerHeader>
                                        <DrawerDescription className="px-4 grid gap-3.5 pb-3.5 pt-1 text-gray-600">
                                            <div>
                                                Featured
                                            </div>
                                            <div>
                                                Best Selling
                                            </div>
                                            <div>
                                                Alphabatically, A-Z
                                            </div>
                                            <div>
                                                Alphabatically, Z-A
                                            </div>
                                            <div>
                                                Price, low to high
                                            </div>
                                            <div>
                                                Price, high to low
                                            </div>
                                            <div>
                                                Date, old to new
                                            </div>
                                            <div>
                                                Date, new to old
                                            </div>
                                        </DrawerDescription>
                                    </DrawerContent>
                                </Drawer>
                            </div>
                            <span className="flex items-center gap-2"><span className="lg:block hidden">View</span><BsGrid3X3GapFill className={`transition-colors hover:text-gray-800 duration-300 cursor-pointer ${view == "grid" ? "" : "text-gray-400"}`} onClick={() => setView("grid")} size={20} /> <PiListBulletsBold className={`transition-colors hover:text-gray-800 duration-300 cursor-pointer ${view == "grid" ? "text-gray-400" : ""}`} onClick={() => setView("list")} size={25} /> </span>
                        </div>
                    </div>
                </div>

                <div className={`grid justify-center mx-0 w-full ${view == "grid" ? "lg:grid-cols-3 xl:grid-cols-4 grid-cols-2 auto-rows-fr" : "grid-flow-row"}`}>
                    {
                        products && products.map((product, idx) => (
                            <div key={idx} className="p-0 w-full h-full">
                                <Card className="rounded-none w-full h-full flex flex-col">
                                    <CardContent className={`flex ${view == "grid" ? "flex-col" : "lg:flex-row flex-col lg:items-center"} h-full`}>
                                        <div className="relative p-3 flex justify-center items-center">
                                            <div className="bg-green-500 px-5 text-xs text-white font-semibold py-1 rounded-r-sm absolute -left-6 -top-0">
                                                Save Rs. {(product.mrp - product.sellingPrice)?.toFixed(2)}
                                            </div>
                                            <NavLink to={`/products/${product._id}`}>
                                                <img className="h-36 cursor-pointer" src={product.images[0]} alt="" />
                                            </NavLink>
                                        </div>

                                        <div className="flex flex-col flex-grow gap-2">
                                            <CardTitle className={`${view == "grid" ? "" : "xl:text-xl"} text-xs  cursor-pointer`}>
                                                <NavLink to={`/products/${product._id}`}>
                                                    {product.title}
                                                </NavLink>
                                            </CardTitle>
                                            <div className="flex items-center w-full gap-3">
                                                <CardTitle className="text-green-400 text-lg">
                                                    From Rs. {product.sellingPrice}
                                                </CardTitle>
                                                <CardTitle className="text-xs line-through">Rs. {product.mrp}</CardTitle>
                                            </div>
                                        </div>

                                        <div className="mt-auto text-center">
                                            <Button className="cursor-pointer w-full rounded-none text-xs bg-[#283b53] hover:bg-[#547192] px-12 transition-colors ease-in-out duration-300">
                                                {product.options.length > 0 ? "Choose Options" : "Add to cart"}
                                            </Button>
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