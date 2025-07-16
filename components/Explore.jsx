"use client"
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Explore = () => {
  return (
    <>
      <div  className="w-full px-4 md:px-10 lg:px-20 md:py-10 lg:py-20">
        <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-6 text-center py-14">
        <motion.div className="col-start-2 col-span-4" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }} viewport={{ once: true }}>
            <h1 className="text-5xl font-bold">Explore Our Mominto</h1>
            <p className="py-2 text-gray-500 text-lg">
              A drink from the "My Mominto bottled brews range OR <br />
              grab one of our delicious coffee's
            </p>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center mx-auto">
          <motion.div className="shadow-lg hover:shadow-2xl cursor-pointer p-5 rounded-lg hover:scale-105 transition-all" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }} viewport={{ once: true }}>
            <h1 className="text-3xl font-semibold text-gray-900">Our Catering</h1>
            <p className="sm:text-sm md:text-base">
              Mominto Catering delicious <br />
              drop off catering
            </p>
            <Image src="/images/ExploreIcon1.png"
            alt="Food Icon"
            width={200}
            height={200}
            className="mx-auto mb-4 py-6" />
            <Button className="uppercase p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">
              Order Catering
            </Button>
          </motion.div>
          <motion.div className="shadow-lg hover:shadow-2xl cursor-pointer p-5 rounded-lg hover:scale-105 transition-all" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }} viewport={{ once: true }}>
            <h1 className="text-3xl font-semibold text-gray-900">The Food</h1>
            <p>Our entire menu is available as <br />dine in or takeways.</p>
            <Image src="/images/ExploreIcon2.png"
            alt="Food Icon"
            width={200}
            height={200}
            className="mx-auto mb-4 py-6" />
            <Button className="uppercase p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">food menu</Button>
          </motion.div>
          <motion.div className="shadow-lg hover:shadow-2xl cursor-pointer p-5 rounded-lg hover:scale-105 transition-all" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }} viewport={{ once: true }}>
            <h1 className="text-3xl font-semibold text-gray-900"> The Gelato</h1>
            <p>Life is like GELATO, enjoy it <br />before it melts</p>
            <Image src="/images/ExploreIcon3.png"
            alt="Food Icon"
            width={200}
            height={200}
            className="mx-auto mb-4 py-6" />
            <Button className="uppercase p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">discover more</Button>
          </motion.div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
