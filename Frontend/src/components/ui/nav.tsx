import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaChevronDown } from "react-icons/fa6";
import { BsCart2 } from "react-icons/bs";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { MdAccountCircle } from "react-icons/md";

function Nav() {
    return (
        <div className='flex items-center justify-between py-5 px-16'>
            <div className='w-40'>
                <a href="">
                    <img src='https://www.farmley.com/cdn/shop/files/Farmley_Logo_New_140x@2x.png?v=1668770658' alt="logo" />
                </a>
            </div>
            <div className='flex'>
                <Input className='2xl:w-[800px] lg:w-[450px] sm:w-[200px] rounded-none rounded-l-2xl focus:rounded-r-2xl' id="search" placeholder="Search...." />
                <NavigationMenu className="border lg:hidden">
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>All Categories</NavigationMenuTrigger>
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

                <Button className="rounded-none rounded-r-2xl">Search</Button>
            </div>
            <div className='flex gap-10'>
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex items-center gap-1.5 lg:hidden'>My Account <span><FaChevronDown /></span></DropdownMenuTrigger>
                    <DropdownMenuTrigger className='lg:flex items-center gap-1.5 hidden'><MdAccountCircle size={35} /></DropdownMenuTrigger>
                    <DropdownMenuContent className='w-fit h-fit p-0 rounded-2xl'>
                        <Card className="w-[350px]">
                            <CardHeader>
                                <CardTitle>Login to my account</CardTitle>
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
                <div className="flex items-center">
                    <BsCart2 size={25} /><sup className="text-xl">0</sup>
                </div>
            </div>
        </div>
    )
}

export default Nav