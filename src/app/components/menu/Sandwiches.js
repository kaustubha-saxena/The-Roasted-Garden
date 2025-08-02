"use client"
import React from 'react'
import MenuCard from './MenuCard'
import { motion } from "motion/react"
import { menuItems } from '../../../../Menu'
const Sandwiches = () => {
  let count=0;
  return (
     <>
   <div className='  h-fit w-[100%] py-5 bg-[#ebd3ac]'>

        <motion.div
      className="  "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

        <div className=' w-full flex justify-center items-center text-center   '>

          <h3 className='2xl:text-2xl xl:text-xl lg:text-lg font-bold text-[#4e3e28]'>SANDWICHES</h3>
        </div>
        <div className='flex justify-center items-center 2xl:gap-6  lg:gap-3  py-3'>

      {menuItems.map((item, index) => {
  if (item.category === "Sandwiches" && count < 5) {
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

export default Sandwiches
