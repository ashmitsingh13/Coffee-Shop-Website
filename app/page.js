import Header from "../components/Header"
import Banner from '../components/Banner';
import Explore from '../components/Explore';
import OrderCoffee from '../components/OrderCoffee';
import SellingCoffee from '../components/SellingCoffee';
import InstantCoffee from '../components/InstantCoffee';
import ClientReviews from '../components/ClientReviews';
import Footer from '../components/Footer';

const page = () => {
  return (
    <>
      <Header />
      <Banner />
      <Explore />
      <OrderCoffee />
      <SellingCoffee />
      <InstantCoffee />
      <ClientReviews />
      <Footer />
    </>
  )
}

export default page;