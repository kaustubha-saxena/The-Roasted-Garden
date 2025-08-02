"use client"
import React from 'react'
import ReviewCard from './Card/ReviewCard'
import { motion } from "motion/react"
const Reviews = () => {
  return (
   <>
      <div className='bg-[#efdfc5] h-fit py-5 w-full 2xl:px-30 xl:px-20 lg:px-15'>
      <motion.div
      className="  "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

        <div className='flex justify-start items-center px-10 pt-8'>

          <h3 className='2xl:text-3xl xl:text-3xl lg:text-2xl  font-bold text-[#4e3e28]'>What Our Guests Say</h3>
        </div>
        <div className='flex justify-center flex-wrap xl:flex-nowrap w-full h-fit items-center gapx-3  py-5 px-6'>

          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>
          <ReviewCard/>

        </div>
    </motion.div>
      </div>
   </>
  )
}

export default Reviews
