import React from 'react'
import HotDrinks from '../components/Card/HotDrinks'
import ColdBeverages from '../components/menu/ColdBeverages'
import Breakfast from '../components/menu/Breakfast'
import Sandwiches from '../components/menu/Sandwiches'
import Hero from '../components/menu/Hero'
const Menu = () => {
  return (
   <>
   <Hero/>



   <div className='w-full h-fit  px-20 bg-[#1b1108] py-15'>

<div className='h-fit w-[100%]  bg-[#ebd3ac] py-10'>

    <HotDrinks/>
    <ColdBeverages/>
    <Breakfast/>
    <Sandwiches/>
</div>
   </div>
   </>
  )
}

export default Menu
export const metadata = {
  title: "Menu",
  description: "Menu of The Roasted Garden",
};