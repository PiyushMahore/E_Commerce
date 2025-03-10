import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5";


function Footer() {
    return (
        <div className='bg-[#f3f5f6] p-6 lg:p-16 w-full flex justify-between lg:flex-row flex-col lg:gap-0 gap-7'>
            <div className='text-[#283b53] lg:w-9/12'>
                <h4 className='text-sm font-semibold'>
                    You've Hit Rock Bottom!
                </h4>
                <br />
                <p className='text-xs'>
                    You've been doing some scrolling - so here's a reward for that overworked thumb. Get 10% discount with code "SECRET". Apply it on checkout. Don't wait! Complete the order - you can thank us later dumdum.
                </p>
            </div>
            <div className='flex justify-center flex-col items-end gap-2'>
                <div className='flex flex-col gap-2'>
                    <span className='text-sm'>
                        Follow Us:
                    </span>
                    <div className='flex gap-2'>
                        <IoLogoFacebook color='#283b53' className='hover:-translate-y-2 transition-transform duration-300' size={25} />
                        <IoLogoInstagram color='#283b53' className='hover:-translate-y-2 transition-transform duration-300' size={25} />
                        <IoLogoTwitter color='#283b53' className='hover:-translate-y-2 transition-transform duration-300' size={25} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer