import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SellingCoffee = () => {
  return (
    <>
      <div className="w-full px-4 md:px-10 lg:px-20 md:py-10 lg:py-20">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-6 text-center py-14">
            <div className="col-start-2 col-span-4">
              <h1 className="text-5xl font-bold">Best Selling Coffee</h1>
              <p className="py-2 text-gray-500 text-lg">
               Enjoy our “My Mominto” bottled brews <br />
  or grab one of our delicious handcrafted coffees.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-auto">
            <div className="shadow-lg hover:shadow-2xl cursor-pointer p-5 rounded-lg hover:scale-105 transition-all">
              <div className="selling-upper grid grid-cols-1 md:grid-cols-2">
                <div>
                  <Image src="/images/SellingUpper1.png" alt="Double Espresso Coffee" width={300} height={300} />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="py-2 text-gray-500 text-lg">#1 Selling</p>
                  <h1 className="text-3xl font-semibold text-gray-900">
                    Double
                    <br />
                    Espresso
                  </h1>
                </div>
              </div>
              <div className="selling-lower">
                <div className="flex px-4 py-4 flex-wrap justify-evenly items-baseline">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis placeat totam temporibus maiores repellat minus.
                  </p>
                </div>
                <div className="flex py-4 px-4 flex-wrap justify-between items-baseline">
                  <p className="text-2xl">$59.99</p>
                  <Button className="px-8 py-6 rounded-3xl shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide uppercase">
                    order now
                  </Button>
                </div>
              </div>
            </div>
            <div className="shadow-lg hover:shadow-2xl cursor-pointer p-5 rounded-lg hover:scale-105 transition-all">
              <div className="selling-upper grid grid-cols-1 md:grid-cols-2">
                <div>
                  <Image src="/images/SellingUpper2.png" alt="Caramel Frappe Coffee" width={300} height={300} />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="py-2 text-gray-500 text-lg">#2 Selling</p>
                  <h1 className="text-3xl font-semibold text-gray-900">
                    Caramel
                    <br />
                    Frappe
                  </h1>
                </div>
              </div>
              <div className="selling-lower">
                <div className="flex px-4 py-4 flex-wrap justify-evenly items-baseline">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis placeat totam temporibus maiores repellat minus.
                  </p>
                </div>
                <div className="flex py-4 px-4 flex-wrap justify-between items-baseline">
                  <p className="text-2xl">$59.99</p>
                  <Button className="px-8 py-6 rounded-3xl shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide uppercase">
                    order now
                  </Button>
                </div>
              </div>
            </div>
            <div className="shadow-lg hover:shadow-2xl cursor-pointer p-5 rounded-lg hover:scale-105 transition-all">
              <div className="selling-upper grid grid-cols-1 md:grid-cols-2">
                <div>
                  <Image src="/images/SellingUpper3.png" alt="Iced Coffee" width={300} height={300} />
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="py-2 text-gray-500 text-lg">#3 Selling</p>
                  <h1 className="text-3xl font-semibold text-gray-900">
                    Iced
                    <br />
                    Coffee
                  </h1>
                </div>
              </div>
              <div className="selling-lower">
                <div className="flex px-4 py-4 flex-wrap justify-evenly items-baseline">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis placeat totam temporibus maiores repellat minus.
                  </p>
                </div>
                <div className="flex py-4 px-4 flex-wrap justify-between items-baseline">
                  <p className="text-2xl">$59.99</p>
                  <Button className="px-8 py-6 rounded-3xl shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide uppercase">
                    order now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellingCoffee;
