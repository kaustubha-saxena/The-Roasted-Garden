"use client"
import React from 'react'
import { motion } from "motion/react"
const About = () => {
  return (
    <>
    <div className='bg-[#efdfc5] h-fit w-[100%] 2xl:px-30 xl:px-20 lg:px-15 py-5 mx-auto'>
      <motion.div
      className="  "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >


    
        <div className='flex justify-start items-center px-10 pt-8'>

           <h3 className='2xl:text-3xl xl:text-3xl lg:text-2xl  font-bold text-[#4e3e28]'>About The Roasted Garden</h3>
        </div>
        <div className='flex justify-center items-center gap-3  py-5 px-6 2xl:text-lg xl:text-base lg:text-sm'>

          <p>
Welcome to The Roasted Garden, your cozy neighborhood café where passion meets flavor. We pride ourselves on serving freshly brewed coffee made from the finest beans, paired with a delightful selection of bites that bring comfort and joy. Whether you’re looking for a quick coffee on the go or a warm spot to relax, The Roasted Garden is the perfect place to unwind and indulge in the aroma of freshly roasted perfection.
          </p>

        </div>
    </motion.div>
      </div>
    </>
  )
}

export default About
