import React from 'react'
import HotDrinks from '../components/Card/HotDrinks'
import ColdBeverages from '../components/menu/ColdBeverages'
import Breakfast from '../components/menu/Breakfast'
import Sandwiches from '../components/menu/Sandwiches'
import { motion } from "motion/react"
const Menu = () => {
  return (
   <>
<div className='w-full h-120 px-20  bg-[#1b1108] object-none  flex justify-center items-center  overflow-hidden relative'>
  <img className='w-full' src="/menuHero.jpg" alt="" />
  <div className='absolute top-0 right-20   w-[40%]  h-full flex justify-center items-start gap-3  flex-col  font-bold text-white '>
    <p className='text-2xl'>Welcome</p>
    <h3 className='text-4xl'>We serve the richest coffee in the city!</h3>
  </div>
  <div className=' absolute top-0 w-full h-full bg-black opacity-30'></div>
</div>



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
