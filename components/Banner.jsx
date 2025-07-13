import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"

const Banner = () => {
  return (
    <>
    <div className="container px-4 md:px-10 lg:px-20 bg-[#f3f4f5]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className='banner-left my-24 flex flex-col justify-center items-center md:items-start gap-6'>
                <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>Mominto Delicious <br /> Coffee<Image src="/images/banner-left.png" alt='image' width={80} height={80} className='inline-block' /></h1>
                <p>Enjoy a drink from the "My Mominto" bottled brews range,<br /> or grab one of our delicious coffees.</p>
                <div className='flex gap-4 py-6'>
                    <Button className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Download App</Button>
                    <Button variant="outline" className="p-7 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Shop Coffee</Button>
                </div>
            </div>
            <div className='banner-right'>
                <Image src="/images/banner-right.png" alt="coffee-cup" width={600} height={600} />

            </div>
        </div>
    </div>
    </>
  )
}

export default Banner