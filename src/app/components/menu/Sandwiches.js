"use client"
import React from 'react'
import MenuCard from './MenuCard'
import { motion } from "motion/react"
const Sandwiches = () => {
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

          <h3 className='text-2xl font-bold text-[#4e3e28]'>SANDWICHES</h3>
        </div>
        <div className='flex justify-center items-center gap-6  py-3'>

          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          <MenuCard />
          

        </div>
    </motion.div>
      </div>
    </>
  )
}

export default Sandwiches
