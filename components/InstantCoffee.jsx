"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const InstantCoffee = () => {
  return (
    <>
      <div className="w-full bg-[#f3f4f5] px-4 md:px-10 lg:px-20 md:py-10 lg:py-20">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div className="banner-left my-24 flex flex-col justify-center items-center md:items-start gap-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }} viewport={{ once: true }}>
            <h1 className="text-4xl md:text-6xl lg:text-6xl font-bold">
              Order Your
              <br />
              Favorite Coffee
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              pariatur sequi dicta dolore voluptatem sed ipsam repellendus
              laborum nostrum eveniet. Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Obcaecati, cupiditate?
            </p>
            <div className="flex gap-4 py-4 flex-wrap justify-center md:justify-start">
              <Button className="px-8 py-6 rounded-4xl shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide uppercase">
                order now
              </Button>
            </div>
          </motion.div>
          <motion.div className="banner-right" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.05, duration: 1, ease: "easeInOut" }} viewport={{ once: true }}>
            <Image
              src="/images/InstantRight.png"
              alt="coffee-cup"
              width={500}
              height={500}
              className="w-full max-w-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default InstantCoffee;
