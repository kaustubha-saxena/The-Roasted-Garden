"use client"
import React from 'react'
import SpeacialCard from '../Card/SpeacialCard'
import { motion } from "motion/react"
const OurSpeciality = () => {
  return (
    <>
      <div className='bg-[#efdfc5] h-fit w-[100%] px-30'>

        <motion.div
      className="  "
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

        <div className='flex justify-start items-center px-10 py-5'>

          <h3 className='text-3xl font-bold text-[#4e3e28]'>Our Specialties</h3>
        </div>
        <div className='flex justify-center items-center gap-3  py-5'>

          <SpeacialCard />
          <SpeacialCard />
          <SpeacialCard />
          <SpeacialCard />

        </div>
    </motion.div>
      </div>
    </>)
}

export default OurSpeciality
