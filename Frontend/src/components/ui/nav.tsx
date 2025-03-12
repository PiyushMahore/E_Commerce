import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaChevronDown } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { MdAccountCircle } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MdOutlineMenu } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react"
import { MdDelete } from "react-icons/md";
import NumberImput from "./numberImput"

function Nav() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth < 1024);
    const [searchInput, setSearchInput] = useState(false);

    useEffect(() => {
        const detectSize = () => {
            setScreenWidth(window.innerWidth < 1024);
        }

        window.addEventListener('resize', detectSize);

        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [])

    const [cart, setCart] = useState([
        {
            img: "https://cdn.shopify.com/s/files/1/0597/7754/8453/files/PanchmevaandPeriPeriSnackMix_small.jpg?v=1715071303",
            title: "Peri - Peri Party Mix (405 g) & Panchmeva (405 g)",
            mrp: 1068.00,
            dscPrice: 899.00
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0597/7754/8453/files/PanchmevaandPeriPeriSnackMix_small.jpg?v=1715071303",
            title: "Peri - Peri Party Mix (405 g) & Panchmeva (405 g)",
            mrp: 1068.00,
            dscPrice: 899.00
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0597/7754/8453/files/PanchmevaandPeriPeriSnackMix_small.jpg?v=1715071303",
            title: "Peri - Peri Party Mix (405 g) & Panchmeva (405 g)",
            mrp: 1068.00,
            dscPrice: 899.00
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0597/7754/8453/files/PanchmevaandPeriPeriSnackMix_small.jpg?v=1715071303",
            title: "Peri - Peri Party Mix (405 g) & Panchmeva (405 g)",
            mrp: 1068.00,
            dscPrice: 899.00
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0597/7754/8453/files/PanchmevaandPeriPeriSnackMix_small.jpg?v=1715071303",
            title: "Peri - Peri Party Mix (405 g) & Panchmeva (405 g)",
            mrp: 1068.00,
            dscPrice: 899.00
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0597/7754/8453/files/PanchmevaandPeriPeriSnackMix_small.jpg?v=1715071303",
            title: "Peri - Peri Party Mix (405 g) & Panchmeva (405 g)",
            mrp: 1068.00,
            dscPrice: 899.00
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0597/7754/8453/files/PanchmevaandPeriPeriSnackMix_small.jpg?v=1715071303",
            title: "Peri - Peri Party Mix (405 g) & Panchmeva (405 g)",
            mrp: 1068.00,
            dscPrice: 899.00
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0597/7754/8453/files/PanchmevaandPeriPeriSnackMix_small.jpg?v=1715071303",
            title: "Peri - Peri Party Mix (405 g) & Panchmeva (405 g)",
            mrp: 1068.00,
            dscPrice: 899.00
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0597/7754/8453/files/PanchmevaandPeriPeriSnackMix_small.jpg?v=1715071303",
            title: "Peri - Peri Party Mix (405 g) & Panchmeva (405 g)",
            mrp: 1068.00,
            dscPrice: 899.00
        },
        {
            img: "https://cdn.shopify.com/s/files/1/0597/7754/8453/files/PanchmevaandPeriPeriSnackMix_small.jpg?v=1715071303",
            title: "Peri - Peri Party Mix (405 g) & Panchmeva (405 g)",
            mrp: 1068.00,
            dscPrice: 899.00
        },
    ]);
    const [quentity, setQuantity] = useState(1);

    return (
        <div className='pt-5 lg:px-16 px-2 h-fit'>
            <div className="flex items-center justify-between">
                <div className='sm:w-40 w-36 flex items-center gap-2.5'>
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger><MdOutlineMenu size={30} /></SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle>Home</SheetTitle>
                                    <SheetTitle>Best Seller</SheetTitle>
                                    <SheetTitle>New Launches</SheetTitle>
                                    <SheetTitle>Healthy Yummy Snacking</SheetTitle>
                                    <SheetTitle>Exotic Range</SheetTitle>
                                    <SheetTitle>Combos</SheetTitle>
                                    <SheetTitle>Bulk Orders</SheetTitle>
                                    <SheetTitle>Contact Us</SheetTitle>
                                </SheetHeader>
                                <hr />
                                <SheetHeader>
                                    Need Help
                                    <SheetDescription className="flex items-center gap-1.5">
                                        <MdAttachEmail size={22} />
                                        <span>social@farmy.com</span>
                                    </SheetDescription>
                                </SheetHeader>
                                <hr />
                                <SheetHeader>
                                    Foolow Us
                                    <SheetDescription className="grid gap-2.5">
                                        <div className="flex items-center gap-2.5">
                                            <FaFacebookF size={18} />
                                            Facebook
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <FaTwitter size={18} />
                                            Twitter
                                        </div>
                                        <div className="flex items-center gap-2.5">
                                            <FaInstagram size={18} />
                                            Instagram
                                        </div>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <a href="">
                        <img src='https://www.farmley.com/cdn/shop/files/Farmley_Logo_New_140x@2x.png?v=1668770658' alt="logo" />
                    </a>
                </div>
                <div className='hidden md:flex'>
                    <Input className='flex 2xl:w-[700px] lg:w-[400px] w-[250px] rounded-none rounded-l-2xl focus:rounded-r-2xl' id="search" placeholder="Search...." />
                    <NavigationMenu className="border xl:flex hidden">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="rounded-none">All Categories</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="p-1 w-[150px]">
                                        <NavigationMenuLink asChild>
                                            <a href="/">
                                                All Category
                                            </a>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <a href="/">
                                                Food Items
                                            </a>
                                        </NavigationMenuLink>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button className="flex rounded-none rounded-r-2xl">Search</Button>
                </div>
                <div className='flex items-center gap-2.5 sm:gap-10'>
                    <span onClick={() => setSearchInput(!searchInput)} className="flex items-center md:hidden"><IoMdSearch size={35} /></span>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            {
                                screenWidth
                                    ?
                                    <MdAccountCircle size={35} />
                                    :
                                    <span className="flex flex-col items-start border-none">
                                        <span className="text-xs text-gray-400">
                                            Login / Signup
                                        </span>
                                        <span className="cursor-pointer flex items-center gap-1.5 text-lg font-semibold">
                                            My Account <FaChevronDown />
                                        </span>
                                    </span>
                            }
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='w-fit h-fit p-0 rounded-2xl'>
                            <Card className="w-[350px]">
                                <CardHeader className="text-center">
                                    <CardTitle>Login to your account</CardTitle>
                                    <CardDescription>Enter your e-mail and password:</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form>
                                        <div className="grid w-full items-center gap-4">
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="email">Email</Label>
                                                <Input id="email" placeholder="Enter Your Email" />
                                            </div>
                                            <div className="flex flex-col space-y-1.5">
                                                <Label htmlFor="password">Password</Label>
                                                <Input id="password" placeholder="Enter Your Password" />
                                            </div>
                                        </div>
                                    </form>
                                </CardContent>
                                <CardFooter className="flex justify-between">
                                    <Button variant="outline">Cancel</Button>
                                    <Button>Sign In</Button>
                                </CardFooter>
                            </Card>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Sheet>
                        <SheetTrigger className="flex items-center cursor-pointer">
                            <BsCart2 size={30} />
                            <sup className="text-sm -translate-x-2 bg-[#283b53] px-1.5 rounded-full text-white">{cart.length}</sup>
                        </SheetTrigger>
                        <SheetContent className="rounded-l-4xl p-0 overflow-y-auto w-[85%]">
                            {cart.length < 1 ?
                                <>
                                    <SheetHeader>
                                        <SheetTitle className="flex items-center gap-2.5 p-4">
                                            <BsCart2 size={20} /> Your Cart
                                        </SheetTitle>
                                        <hr />
                                    </SheetHeader>
                                    <SheetDescription className="h-full flex flex-col items-center justify-center">
                                        <span>Your cart is currently empty</span>
                                        <br />
                                        <Button className="hover:bg-[#3d36bf] cursor-pointer bg-[#3d36bf] text-white py-6 px-6 rounded-2xl">
                                            Continue Shopping
                                        </Button>
                                    </SheetDescription>
                                </>
                                :
                                <>
                                    <SheetHeader className="pb-0">
                                        <SheetTitle className="flex items-center gap-2.5 p-4 w-full">
                                            <BsCart2 size={20} />Your cart
                                            <span className="text-gray-500">
                                                · {cart.length} items
                                            </span>
                                        </SheetTitle>
                                        <hr />
                                    </SheetHeader>
                                    <SheetDescription className="flex gap-2 flex-col">
                                        {cart && cart.map((item, index) => (
                                            <div key={index} className="flex gap-1 h-[85px] bg-[#fafafa]">
                                                <div className="p-1 h-full w-2/7">
                                                    <div className="w-full h-full">
                                                        <img className="w-full h-full bg-cover bg-center bg-no-repeat" src={item.img} alt="" />
                                                    </div>
                                                </div>
                                                <div className="w-full p-2 grid gap-1.5">
                                                    <div className="flex justify-between">
                                                        <p>
                                                            {item.title}
                                                        </p>
                                                        <div className="p-1">
                                                            <MdDelete size={20} />
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex">
                                                            <button onClick={() => setQuantity((prev) => prev > 1 ? prev - 1 : 50)} className="border px-2">-</button>
                                                            <input className="w-8 border text-center" readOnly value={quentity} type="text" />
                                                            <button onClick={() => setQuantity((prev) => prev < 50 ? prev + 1 : 1)} className="border px-2">+</button>
                                                        </div>
                                                        <div>
                                                            <span className="line-through mr-0.5 text-xs">
                                                                ₹{item.mrp}
                                                            </span>
                                                            ₹{item.dscPrice}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </SheetDescription>
                                    <SheetFooter className="shadow border-t w-full fixed bottom-0 z-50 bg-white rounded-bl-4xl">
                                        <div className="flex justify-between">
                                            <div className="flex w-full gap-5">
                                                <div className="grid">
                                                    <span className="text-xl font-semibold">₹899</span>
                                                    <span className="text-sm element underline underline-offset-2">Estimated total</span>
                                                </div>
                                                <Button className="py-6 md:px-20 px-14 sm:px-16 text-[17px] rounded-2xl bg-[#3d36bfff] hover:bg-[#3d36bfff]">
                                                    Checkout
                                                </Button>
                                            </div>
                                        </div>
                                    </SheetFooter>
                                </>
                            }
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
            {
                screenWidth
                    ?
                    <div className={`px-3 ${searchInput ? "opacity-100 translate-y-0 pointer-events-auto py-2.5" : "opacity-0 -translate-y-full pointer-events-none"} transition-all duration-500 ease-out`}>
                        <Input type="search" placeholder="search...." />
                    </div>
                    :
                    null
            }

            <div className="py-6 lg:flex hidden">
                <ul className="list-none flex gap-8 text-gray-500 text-sm">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Best Seller</li>
                    <li className="cursor-pointer">New Launches</li>
                    <li className="cursor-pointer">Healthy Yummy Snacking</li>
                    <li className="cursor-pointer">Exotic Range</li>
                    <li className="cursor-pointer">Combos</li>
                    <li className="cursor-pointer">Bulk Orders</li>
                    <li className="cursor-pointer">Contact Us</li>
                </ul>
            </div>
        </div>
    )
}

export default Nav