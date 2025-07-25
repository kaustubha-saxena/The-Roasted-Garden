"use client"
import React from 'react'
import Navbar from './Navbar'
import NavbarHero from './NavbarHero';

import { motion } from "motion/react"
import Link from 'next/link';
const Hero = () => {





  return (

    <>
      {/* <div>
  {isPast100vh ? (
    // <Navbar/>
    <></>
  ) : (
    <NavbarHero/>
  )}
</div> */}

      <div className='relative bg-[#1b1108] w-[100vW] h-[90vh] text-white overflow-hidden '>
        <div className='flex flex-col justify-center items-center w-[50%] h-[100%] gap-5  px-20   '>

          <motion.div
            initial={{ opacity: 0, y: "0px" }}
            animate={{ opacity: 1, y: "-20px" }}
            transition={{ duration: 1 }}
            className='w-full h-fit  '
          >
            <div className='text-center text-7xl  text-shadow-lg' >

              <h1 className=' font-extrabold text-[#d2bb95] tracking-tight'>The</h1>
              <h1 className=' font-extrabold text-[#d2bb95] tracking-tight '>Roasted</h1>
              <h1 className=' font-extrabold text-[#d2bb95] tracking-tight'>Garden</h1>
            </div>

          </motion.div>
            <motion.div
            initial={{ opacity: 0, y: "0px" }}
            animate={{ opacity: 1, y: "-20px" }}
            transition={{ duration: 1,delay: 0.25 }}
            className='w-full h-fit  '
          >

            <p className='text-white text-center mt-4 text-2xl font-medium '>Your neighborhood spot for exceptional coffee and delicious bites.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "0px" }}
            animate={{ opacity: 1, y: "-20px" }}
            transition={{ duration: 1,delay: 0.5 }}
            className='w-full h-fit  '
          >

          <div className='flex justify-center items-center gap-3 text-black mt-5 font-bold '>
            <Link href="/menu">
              <button className='px-6 bg-[#efdfc5] py-2 rounded-lg hover:cursor-pointer hover:bg-[#ceb998] shadow-sm shadow-[#ffcb78]'>Make Reservations</button>
            </Link>
            <Link href={"/order"}>
              <button className='px-6 bg-[#efdfc5] py-2 rounded-lg hover:cursor-pointer hover:bg-[#ceb998] shadow-sm shadow-[#ffcb78]'>Order Online</button>
            </Link>
          </div>
          </motion.div>
        </div>
        

      </div>
      <div className='absolute  max-h-[90%] w-[35%]  top-10 right-[-27px] opacity-10 text-[#8f8577]   overflow-hidden'>
      <motion.div
  initial={{ opacity: 0,  x: "120px" }}
  animate={{ opacity: 1,  x: "0px" }}
  transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
>
          <p className='text-9xl font-bold text-shadow-[#4e3e28] text-shadow-lg'>Americano</p>
          <p className='text-9xl font-bold text-shadow-[#4e3e28] text-shadow-lg '>Espresso</p>
          <p className='text-9xl font-bold text-shadow-[#4e3e28] text-shadow-lg'>Cappuccino</p>
          <p className='text-9xl font-bold text-shadow-[#4e3e28] text-shadow-lg'>Macchiato</p>
          <p className='text-9xl font-bold text-shadow-[#4e3e28] text-shadow-lg'>Mocha</p>

      </motion.div>
        </div>





    </>
  )
}

export default Hero
