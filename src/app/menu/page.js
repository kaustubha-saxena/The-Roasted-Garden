import React from 'react'
import HotDrinks from '../components/Card/HotDrinks'
import ColdBeverages from '../components/menu/ColdBeverages'
import Breakfast from '../components/menu/Breakfast'
import Sandwiches from '../components/menu/Sandwiches'
import { motion } from "motion/react"
const Menu = () => {
  return (
   <>
<div className='w-full h-120  bg-[#543b35] object-none  overflow-hidden relative'>
  <img src="/menuHero.jpg" alt="" />
  <div className='absolute top-0 w-full h-full flex justify-center items-center flex-col text-3xl font-bold'>
    <p>Welcome</p>
    <h3>We serve the richest coffee in the city!</h3>
  </div>
  <div className=' absolute top-0 w-full h-full bg-black opacity-30'></div>
</div>

<div className='w-full h-30  bg-[#1b1108] flex justify-center items-center'>
  <img src="" alt="" />
</div>

   <div className='w-full h-fit  px-20 bg-[#1b1108]'>

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
