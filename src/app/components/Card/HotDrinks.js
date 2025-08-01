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

        <motion.div
      className="  "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

        <div className=' w-full flex justify-center items-center text-center    '>

          <h3 className='text-2xl font-bold text-[#4e3e28]'>HOT DRINKS</h3>
        </div>
        <div className='flex justify-center items-center gap-6 py-3'>

         {menuItems.map((item, index) => {
  if (item.category === "Hot Drinks" && count < 5) {
    count++;
    return <MenuCard key={index} item={item} />;
  }
  return null;
})} 
    
          

        </div>
    </motion.div>
      </div>
    </>
  )
}

export default HotDrinks
