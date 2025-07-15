import React from 'react'
import Header from "../components/Header"
import Banner from '../components/Banner';
import Explore from '../components/Explore';
import OrderCoffee from '../components/OrderCoffee';

const page = () => {
  return (
    <>
    <Header />
    <Banner/>
    <Explore />
    <OrderCoffee />
    </>
  )
}

export default page;