"use client"
import React from 'react'
import MenuCard from '../menu/MenuCard'
import { motion } from "motion/react"
import { menuItems } from '../../../../Menu'
const HotDrinks = () => {
  let count=0;
  return (
    <>
   <div className='  '>

        <div className=' w-full flex justify-center items-center text-center    '>

          <h3 className='2xl:text-2xl xl:text-xl lg:text-lg font-bold text-[#4e3e28]'>HOT DRINKS</h3>
        </div>
        <div className='flex justify-center items-center 2xl:gap-6  lg:gap-3 py-3'>

         {menuItems.map((item, index) => {
  if (item.category === "Hot Drinks" && count < 5) {
    count++;
    return <MenuCard key={index} item={item} />;
  }
  return null;
})} 
    
          

        </div>
 
      </div>
    </>
  )
}

export default HotDrinks
