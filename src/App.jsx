import { useEffect, useState } from 'react'
import './App.css'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Products from './Components/Products/Products'
import AOS from "aos"
import "aos/dist/aos.css"
import TopProducts from './Components/TopProducts/TopProducts'
import Banner from './Components/Banner/Banner'
import Subscribe from "./Components/Subscribe/Subscribe"
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Popup from './Components/Popup/Popup'

function App() {

  const [orderPopup,setOrderPopup] = useState(false);

  const handleOrderPopup =()=>{
    setOrderPopup(!orderPopup)
  }

  useEffect(()=>{
    AOS.init({
      offset:100,
      duration:800,
      easing:"ease-in-sine",
      delay:100,
    });
    AOS.refresh();
  },[])

  return (
   <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
    <Navbar handleOrderPopup={handleOrderPopup} />
    <Hero/>
    <Products/>
    <TopProducts/>
    <Banner/>
    <Subscribe/>
    <Products/>
    <Testimonials/>
    <Footer/>
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} handleOrderPopup={handleOrderPopup} />
   </div>
  )
}

export default App
