"use client"
import React from 'react'
import { motion } from "motion/react"
const Hero = () => {
  return (
   <div className='w-full h-120 px-20  bg-[#1b1108] object-none  flex justify-center items-center  overflow-hidden relative'>
  <img className='w-full' src="/menuHero.jpg" alt="" />
   
 {/* <motion.div
            initial={{ opacity: 0, y: "0px" }}
            animate={{ opacity: 1, y: "-20px" }}
            transition={{ duration: 1 }}
            className='w-full h-full  relative'
          > */}
          {/* </motion.div> */}
            
  <div className='absolute top-0 left-30  w-[40%] h-full flex justify-center items-start gap-3  flex-col  font-bold text-white '>
    <p className='text-2xl'>Welcome</p>
    <h3 className='text-4xl'>We serve the richest coffee in the city!</h3>
  </div>
         
  <div className=' absolute top-0 w-full h-full bg-black opacity-30'></div>
</div>
  )
}

export default Hero
