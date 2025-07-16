"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

const Banner = () => {
  return (
    <>
    <div className="w-full bg-[#f3f4f5] px-4 md:px-10 lg:px-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <motion.div className='banner-left my-24 flex flex-col justify-center items-center md:items-start gap-6' initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }} viewport={{ once: true }}>
                <h1 className='text-4xl md:text-6xl lg:text-8xl font-bold'>Mominto Delicious <br /> Coffee<Image src="/images/BannerLeft.png" alt='image' width={80} height={80} className='inline-block' /></h1>
                <p>Enjoy a drink from the "My Mominto" bottled brews range,<br /> or grab one of our delicious coffees.</p>
                <div className='flex gap-4 py-4 flex-wrap justify-center md:justify-start'>
                    <Button className="px-6 py-4 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Download App</Button>
                    <Button variant="outline" className="px-6 py-4 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">Shop Coffee</Button>
                </div>
            </motion.div>
            <motion.div className='banner-right' initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }} viewport={{ once: true }}>
                <Image src="/images/BannerRight.png" alt="coffee-cup" width={600} height={600} className="w-full max-w-[500px] md:max-w-[600px]" />
            </motion.div>
        </div>
    </div>
    </>
  )
}

export default Banner