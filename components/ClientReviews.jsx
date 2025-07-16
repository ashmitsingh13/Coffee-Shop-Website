import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@headlessui/react";
import { FaRegStar } from "react-icons/fa";

const Client = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-6 text-center py-10 px-4">
            <div className="col-start-1 sm:col-start-2 col-span-6 sm:col-span-4">
              <h1 className="text-3xl sm:text-5xl font-bold">
                Client Testimonial
              </h1>
              <p className="py-3 text-gray-500 text-base sm:text-lg  leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, <br className="hidden sm:block" />
                nisi provident consectetur quas accusantium excepturi!
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-6">
                <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/leerob.png"
                      alt="@leerob"
                    />
                    <AvatarFallback>LR</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/evilrabbit.png"
                      alt="@evilrabbit"
                    />
                    <AvatarFallback>ER</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-white">
                    <AvatarImage
                      src="https://github.com/jakejarvis.png"
                      alt="@jakejarvis"
                    />
                    <AvatarFallback>JJ</AvatarFallback>
                  </Avatar>
                  <Avatar className="ring-2 ring-white">
                    <AvatarImage
                      src="https://github.com/vercel.png"
                      alt="@vercel"
                    />
                    <AvatarFallback>VC</AvatarFallback>
                  </Avatar>
                </div>
                <div className="pl-4 border-l-2 border-gray-300">
                  <h1 className="text-2xl text-start font-bold text-gray-800">
                    4.6{" "}
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                  </h1>
                  <p className="text-sm text-gray-500">
                    Rated by 25k+ on Google
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto">
            <div className="shadow-lg hover:shadow-2xl cursor-pointer rounded-lg hover:scale-105 transition-all" data-aos='fade-left' data-aos-delay='50' data-aos-duration='1000' data-aos-easing='ease-in-out'>
              <div className="client-upper h-1/2 bg-[#E5E5E5] flex justify-center">
                <Image
                  src="/images/ClientImage1.png"
                  alt="Aeysha Ahmed"
                  width={300}
                  height={300}
                />
              </div>
              <div className="client-lower p-5">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl px-4 py-4 font-semibold text-gray-900">
                    Aeysha Ahmed &nbsp;
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                  </h1>
                </div>
                <div className="flex px-4 flex-wrap justify-evenly items-baseline">
                  <p className="py-2 text-gray-500 text-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima alias, ex reprehenderit iste sit iure corporis
                    assumenda excepturi aspernatur, eligendi eum dolorum omnis
                    ullam adipisci consequuntur commodi eius
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-md hover:shadow-2xl cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-all bg-white" data-aos='fade-left' data-aos-delay='50' data-aos-duration='1000' data-aos-easing='ease-in-out'>
              <div className="client-upper h-1/2 bg-[#E5E5E5] flex justify-center">
                <Image
                  src="/images/ClientImage2.png"
                  alt="Liba Jadoon"
                  width={300}
                  height={300}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="client-lower h-1/2 p-5">
                <div className="flex gap-6 items-center">
                  <h1 className="text-xl px-4 py-4 font-semibold text-gray-900">
                    Liba Jadoon &nbsp;
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                    <span className="inline-block text-yellow-400 " width={20}>
                      <FaRegStar />
                    </span>
                  </h1>
                </div>

                <div className="flex px-4 flex-wrap justify-evenly items-baseline">
                  <p className="py-2 text-gray-500 text-md">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima alias, ex reprehenderit iste sit iure corporis
                    assumenda excepturi aspernatur, eligendi eum dolorum omnis
                    ullam adipisci consequuntur commodi eius
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-md hover:shadow-2xl cursor-pointer rounded-lg overflow-hidden hover:scale-105 transition-all bg-white" data-aos='fade-left' data-aos-delay='50' data-aos-duration='1000' data-aos-easing='ease-in-out'>
              <div className="client-upper h-1/2 bg-[#E5E5E5] flex justify-center">
                <Image
                  src="/images/ClientImage3.png"
                  alt="Client"
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="client-lower h-1/2 p-4 sm:p-5">
                <h1 className="text-lg sm:text-xl px-4 py-4 font-semibold text-gray-900">
                  Aeysha Ahmed &nbsp;
                  <span className="inline-block text-yellow-400 " width={20}>
                    <FaRegStar />
                  </span>
                  <span className="inline-block text-yellow-400 " width={20}>
                    <FaRegStar />
                  </span>
                  <span className="inline-block text-yellow-400 " width={20}>
                    <FaRegStar />
                  </span>
                  <span className="inline-block text-yellow-400 " width={20}>
                    <FaRegStar />
                  </span>
                  <span className="inline-block text-yellow-400 " width={20}>
                    <FaRegStar />
                  </span>
                </h1>
                <div className="flex px-4 flex-wrap justify-evenly items-baseline">
                  <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Minima alias, ex reprehenderit iste sit iure corporis
                    assumenda excepturi aspernatur, eligendi eum dolorum omnis
                    ullam adipisci consequuntur commodi eius
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
