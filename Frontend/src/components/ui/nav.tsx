import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { NavLink } from "react-router";
import { FaChevronDown } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { MdAccountCircle } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MdOutlineMenu } from "react-icons/md";
import { MdAttachEmail } from "react-icons/md";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { useEffect, useState } from "react"
import Cart from "@/pages/cart"
import { useAuth } from "@/context/userContextProvider";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu"

function Nav() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth < 1024);
    const [searchInput, setSearchInput] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = useAuth();

    useEffect(() => {
        const detectSize = () => {
            setScreenWidth(window.innerWidth < 1024);
        }

        window.addEventListener('resize', detectSize);

        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, [])

    const [cart] = useState([
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

    useEffect(() => {
        console.log(auth?.user)
    }, [auth?.user])

    return (
        <div className='pt-5 lg:px-16 px-2 h-fit'>
            <div className="flex items-center justify-between">
                <div className='sm:w-40 w-36 flex items-center gap-2.5'>
                    <div className="lg:hidden">
                        <Sheet>
                            <SheetTrigger><MdOutlineMenu size={30} /></SheetTrigger>
                            <SheetContent side="left">
                                <SheetHeader>
                                    <SheetTitle>
                                        <NavLink to='/'>
                                            Home
                                        </NavLink>
                                    </SheetTitle>
                                    <SheetTitle>
                                        <NavLink to='/collections/all'>
                                            Best Seller
                                        </NavLink>
                                    </SheetTitle>
                                    <SheetTitle>
                                        <NavLink to='/collections/new-launches'>
                                            New Launches
                                        </NavLink>
                                    </SheetTitle>
                                    <SheetTitle>
                                        <NavLink to='/collections/wholesome-mixes-for-anytime-snacking'>
                                            Healthy Yummy Snacking
                                        </NavLink>
                                    </SheetTitle>
                                    <SheetTitle>
                                        <NavLink to='/collections/exotic-fruits-berries'>
                                            Exotic Range
                                        </NavLink>
                                    </SheetTitle>
                                    <SheetTitle>
                                        <NavLink to='/collections/combos'>
                                            Combos
                                        </NavLink>
                                    </SheetTitle>
                                    <SheetTitle>
                                        <NavLink to='/contact-us'>
                                            Bulk Orders
                                        </NavLink>
                                    </SheetTitle>
                                    <SheetTitle>
                                        <NavLink to='/contact-us'>
                                            Contact Us
                                        </NavLink>
                                    </SheetTitle>
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

                    <Button className="flex rounded-none rounded-r-2xl cursor-pointer">Search</Button>
                </div>
                <div className='flex items-center gap-2.5 sm:gap-10'>
                    <span onClick={() => setSearchInput(!searchInput)} className="flex items-center md:hidden"><IoMdSearch size={35} /></span>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="outline-none">
                            {
                                screenWidth
                                    ?
                                    <MdAccountCircle size={35} />
                                    :
                                    <span className="flex flex-col items-start border-none text-sm">
                                        <span className="text-gray-400 text-xs">
                                            {auth?.user ? `Hello ${auth.user?.data.firstName}` : "Login / Signup"}
                                        </span>
                                        <span className="cursor-pointer flex items-center gap-1.5 font-semibold">
                                            My Account <FaChevronDown />
                                        </span>
                                    </span>
                            }
                        </DropdownMenuTrigger>
                        {auth?.user?.data
                            ?
                            <DropdownMenuContent className="rounded-sm py-2">
                                <DropdownMenuItem className="px-4">My orders</DropdownMenuItem>
                                <DropdownMenuItem className="px-4">My address</DropdownMenuItem>
                                <DropdownMenuItem onClick={() => auth.logout()} className="px-4">Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                            :
                            <DropdownMenuContent className='w-fit h-fit p-0 rounded-sm mr-2 md:mr-0'>
                                <Card className="w-[350px]">
                                    <CardHeader className="text-center">
                                        <CardTitle>Login to your account</CardTitle>
                                        <CardDescription>Enter your e-mail and password:</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <form>
                                            <div className="grid w-full items-center gap-4">
                                                <div className="flex flex-col space-y-1.5">
                                                    <Input className="rounded-none" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                                </div>
                                                <div className="flex flex-col space-y-1.5">
                                                    <Input className="rounded-none" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                                </div>
                                            </div>
                                        </form>
                                    </CardContent>
                                    <CardFooter className="flex justify-between w-full flex-col gap-2.5">
                                        <Button onClick={() => auth?.login(email, password)} className="cursor-pointer w-full py-5 rounded-none">Login</Button>
                                        <p className="text-xs">New customer? <NavLink to="/account/register">Create your account</NavLink></p>
                                        <p className="text-xs">Lost password? <a href="#">Recover password</a></p>
                                    </CardFooter>
                                </Card>
                            </DropdownMenuContent>
                        }
                    </DropdownMenu>
                    <Sheet>
                        <SheetTrigger className="flex items-center cursor-pointer">
                            <BsCart2 size={30} />
                            <sup className="text-sm -translate-x-2 bg-[#283b53] px-1.5 rounded-full text-white">{cart.length}</sup>
                        </SheetTrigger>
                        <Cart cart={cart} />
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
                    <li className="cursor-pointer">
                        <NavLink to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to='/collections/all'>
                            Best Seller
                        </NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to='/collections/new-launches'>
                            New Launches
                        </NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to='/collections/wholesome-mixes-for-anytime-snacking'>
                            Healthy Yummy Snacking
                        </NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to='/collections/exotic-fruits-berries'>
                            Exotic Range
                        </NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to='/collections/combos'>
                            Combos
                        </NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to='/contact-us'>
                            Bulk Orders
                        </NavLink>
                    </li>
                    <li className="cursor-pointer">
                        <NavLink to='/contact-us'>
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Nav