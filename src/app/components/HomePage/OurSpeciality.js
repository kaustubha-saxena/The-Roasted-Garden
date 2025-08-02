"use client"
import React from 'react'
import SpeacialCard from '../Card/SpeacialCard'
import { motion } from "motion/react"
import { menuItems } from '../../../../Menu'
const OurSpeciality = () => {
  return (
    <>
      <div className='bg-[#efdfc5] h-fit w-full 2xl:px-30 xl:px-20 lg:px-15 flex flex-col justify-start'>

        <motion.div
          className="  "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >

          <span className='flex justify-start items-center px-10 pt-8 '>

            <h3 className='2xl:text-3xl xl:text-3xl lg:text-2xl  font-bold text-[#4e3e28]'>Our Specialties</h3>
          </span>
          <div className='flex justify-center items-center gap-3  py-2'>

            {menuItems.map((item, index) => {
              if (item.category === "OurSpeciality" ) {
                
                return <SpeacialCard key={index} item={item} />;
              }
              return null;
            })}
            

          </div>
        </motion.div>
      </div>
    </>)
}

export default OurSpeciality
