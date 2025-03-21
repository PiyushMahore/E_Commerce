import { FC, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { BsCart2 } from "react-icons/bs";
import { Button } from "@/components/ui/button"

interface cattItems {
    img: string;
    title: string;
    mrp: number;
    dscPrice: number;
}

interface cart {
    cart: cattItems[];
}

const Cart: FC<cart> = ({ cart }) => {
    const [quentity, setQuantity] = useState(1);

    return (
        <SheetContent className="rounded-l-4xl p-0 overflow-y-auto w-[85%]" >
            {
                cart.length < 1 ?
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
        </SheetContent >
    )
}

export default Cart;