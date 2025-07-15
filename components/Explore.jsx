import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Explore = () => {
  return (
    <>
      <div  className="w-full px-4 md:px-10 lg:px-20 md:py-10 lg:py-20">
        <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-6 text-center py-14">
          <div className="col-start-2 col-span-4">
            <h1 className="text-5xl font-bold">Explore Our Mominto</h1>
            <p className="py-2 text-gray-500 text-lg">
              A drink from the "My Mominto bottled brews range OR <br />
              grab one of our delicious coffee's
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 text-center mx-auto">
          <div className="shadow-lg hover:shadow-2xl cursor-pointer p-5 rounded-lg hover:scale-105 transition-all">
            <h1 className="text-3xl font-semibold text-gray-900">Our Catering</h1>
            <p>
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
          </div>
          <div className="shadow-lg hover:shadow-2xl cursor-pointer p-5 rounded-lg hover:scale-105 transition-all">
            <h1 className="text-3xl font-semibold text-gray-900">The Food</h1>
            <p>Our entire menu is available as <br />dine in or takeways.</p>
            <Image src="/images/ExploreIcon2.png"
            alt="Food Icon"
            width={200}
            height={200}
            className="mx-auto mb-4 py-6" />
            <Button className="uppercase p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">food menu</Button>
          </div>
          <div className="shadow-lg hover:shadow-2xl cursor-pointer p-5 rounded-lg hover:scale-105 transition-all">
            <h1 className="text-3xl font-semibold text-gray-900"> The Gelato</h1>
            <p>Life is like GELATO, enjoy it <br />before it melts</p>
            <Image src="/images/ExploreIcon3.png"
            alt="Food Icon"
            width={200}
            height={200}
            className="mx-auto mb-4 py-6" />
            <Button className="uppercase p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide">discover more</Button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
