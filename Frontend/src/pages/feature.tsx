import { GrDeliver } from "react-icons/gr";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";
import { GiReturnArrow } from "react-icons/gi";

function Feature() {
    return (
        <div className='flex px-16 justify-between items-center pb-18 pt-7'>
            <div className='flex items-center gap-1.5'>
                <GrDeliver size={30} />
                <p>Free Home Delivery Across India</p>
            </div>
            <div className='flex items-center gap-1.5'>
                <GiReturnArrow size={30} />
                <p>7 Day Return If You're Not Happy</p>
            </div>
            <div className='flex items-center gap-1.5'>
                <IoIosLeaf size={30} />
                <p>100% Clean, Nutritious Products</p>
            </div>
            <div className='flex items-center gap-1.5'>
                <FaHandHoldingHeart size={30} />
                <p>Enabled by 5000+ Farmers</p>
            </div>
        </div>
    )
}

export default Feature