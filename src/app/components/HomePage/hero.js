"use client"
import React from 'react'
import { motion } from "motion/react"
import Link from 'next/link';
const Hero = () => {

  return (

    <>
     <div className='relative w-full h-fit'>


      <div className='relative bg-[#1b1108] w-full 2xl:h-[800px] lg:h-[500px] xl:h-[600px] text-white overflow-hidden '>
        <div className='absolute flex flex-col justify-center items-center w-[50%] h-[100%] gap-5  px-20  '>

          <motion.div
            initial={{ opacity: 0, y: "0px" }}
            animate={{ opacity: 1, y: "-20px" }}
            transition={{ duration: 1 }}
            className='w-full h-fit  '
          >
            <div className='text-center 2xl:text-7xl lg:text-5xl xl:text-6xl  text-shadow-lg' >

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

            <p className='text-white text-center mt-4 2xl:text-2xl lg:text-lg xl:text-xl font-medium '>Your neighborhood spot for exceptional coffee and delicious bites.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: "0px" }}
            animate={{ opacity: 1, y: "-20px" }}
            transition={{ duration: 1,delay: 0.5 }}
            className='w-full h-fit  '
            >

          <div className='flex justify-center items-center gap-3 text-black mt-5 font-bold '>
            <Link className=' ' href="/reservations">
              <button className=' lg:px-4 2xl:px-6 bg-[#efdfc5] py-2 rounded-lg lg:text-sm xl:text-base  shadow-sm hover:cursor-pointer hover:bg-[#ceb998] shadow-[#ffcb78]'>Make Reservations</button>
            </Link>
            <Link href={"/menu"}>
              <button className=' lg:px-4 2xl:px-6 bg-[#efdfc5] py-2 rounded-lg lg:text-sm xl:text-base hover:cursor-pointer hover:bg-[#ceb998] shadow-sm shadow-[#ffcb78]'>Order Online</button>
            </Link>
          </div>
          </motion.div>
        </div>
        

      </div>
      <div className=' absolute top-0  xl:w-[35%] lg:w-[35%]  h-[100vh] overflow-hidden right-0 '>

      <div className='absolute  h-fit w-full  top-0 right-[-27px] opacity-20 text-[#afa18e]   z-10'>
        

      <motion.div
  initial={{ opacity: 0,  x: "120px" }}
  animate={{ opacity: 1,  x: "0px" }}
  transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
>
          <p className= ' lg:text-8xl 2xl:text-9xl 2xl:bg-red-400 xl:bg-green-500 lg:bg-blue-500 font-bold text-shadow-[#4e3e28] text-shadow-lg'>Americano</p>
          <p className= ' lg:text-8xl xl:text-[110px] 2xl:text-[150px] font-bold text-shadow-[#4e3e28] text-shadow-lg '>Espresso</p>
          <p className= ' lg:text-8xl xl:text-[110px] 2xl:text-[150px] font-bold text-shadow-[#4e3e28] text-shadow-lg'>Cappuccino</p>
          <p className= ' lg:text-8xl xl:text-[110px] 2xl:text-[150px] font-bold text-shadow-[#4e3e28] text-shadow-lg'>Macchiato</p>
          <p className= ' lg:text-8xl xl:text-[110px] 2xl:text-[150px] font-bold text-shadow-[#4e3e28] text-shadow-lg'>Mocha</p>

      </motion.div>
 
        </div>
  </div>




  </div>

    </>
  )
}

export default Hero
