import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button"

const OrderCoffee = () => {
  return (
    <>
    <div className="w-full bg-[#f3f4f5] px-4 md:px-10 lg:px-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className='banner-left' data-aos='fade-left' data-aos-delay='50' data-aos-duration='1000' data-aos-easing='ease-in-out'>
                <Image src="/images/OrderLeft.png" alt="coffee-cup" width={600} height={600} className="w-full max-w-[500px] md:max-w-[600px]" />
            </div>
            <div className='banner-right my-24 flex flex-col justify-center items-center md:items-start gap-6' data-aos='fade-left' data-aos-delay='50' data-aos-duration='1000' data-aos-easing='ease-in-out'>
                <h1 className='text-4xl md:text-6xl lg:text-6xl font-bold'>Order Your<br />Favorite Coffee</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi pariatur sequi dicta dolore voluptatem sed ipsam repellendus laborum nostrum eveniet. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, cupiditate?</p>
                <div className='flex gap-4 py-4 flex-wrap justify-center md:justify-start'>
                    <Button className="px-8 py-6 rounded-4xl shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide uppercase">order now</Button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}


export default OrderCoffee
