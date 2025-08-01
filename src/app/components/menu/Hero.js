"use client"
import React from 'react'
import { motion } from "motion/react"
const Hero = () => {
  return (
   <div className='w-full h-120 px-20  bg-[#1b1108] object-none  flex justify-center items-center  overflow-hidden relative'>
  <img className='w-full' src="/menuHero.jpg" alt="" />
               
  <div className='absolute top-0 left-30  w-[40%] h-full flex justify-center items-start gap-3  flex-col  font-bold text-white '>
     <motion.div
                initial={{ opacity: 0, y: "0px" }}
                animate={{ opacity: 1, y: "-20px" }}
                transition={{ duration: 1,delay:0 }}
                className='w-full h-fit  '
                >

    <p className='text-2xl'>Welcome</p>
                </motion.div>
                 <motion.div
                initial={{ opacity: 0, y: "0px" }}
                animate={{ opacity: 1, y: "-20px" }}
                transition={{ duration: 1,delay:0.5 }}
                className='w-full h-fit  '
                >

    <h3 className='text-4xl'>We serve the richest coffee in the city!</h3>
                </motion.div>
  </div>
         
  <div className=' absolute top-0 w-full h-full bg-black opacity-30'></div>
</div>
  )
}

export default Hero
