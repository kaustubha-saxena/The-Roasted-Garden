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
  
  <div className='bg-[#1b1108] w-[100vW] h-[100vh] text-white'>
    <motion.div
       initial={{ opacity:0,  y:"0px"}}
      animate={{opacity:1,   y:"-20px"}}
  transition={{  duration: 1 }}
  className='w-full h-full '
>

    <div className='flex flex-col justify-center items-center w-[50%] h-[100%] gap-5  px-20   '>
      <div className='text-center text-7xl  text-shadow-lg' >
{/* text-shadow-[#8f8475] */}
      <h1 className=' font-extrabold text-[#d2bb95] tracking-tight'>The</h1>
      <h1 className=' font-extrabold text-[#d2bb95] tracking-tight '>Roasted</h1>
      <h1 className=' font-extrabold text-[#d2bb95] tracking-tight'>Garden</h1>
      </div>
      <p className='text-white text-center mt-4 text-2xl font-medium '>Your neighborhood spot for exceptional coffee and delicious bites.</p>
      <div className='flex justify-center items-center gap-3 text-black mt-5 font-bold '>
      <Link href="/menu">
        <button className='px-6 bg-[#efdfc5] py-2 rounded-lg hover:cursor-pointer hover:bg-[#ceb998] shadow-sm shadow-[#ffcb78]'>View Menu</button>
      </Link>
      <Link href={"/order"}>
        <button className='px-6 bg-[#efdfc5] py-2 rounded-lg hover:cursor-pointer hover:bg-[#ceb998] shadow-sm shadow-[#ffcb78]'>Order Online</button>
      </Link>
      </div>
    </div>
</motion.div>
  </div>
<motion.div
       initial={{ opacity: 0 , y:"0px"}}
      animate={{ opacity: 1 , y:"-0px"}}
  transition={{ ease: "easeOut", duration: 0.4, delay:1 }}
  
>
 <div className='absolute  max-h-[90%]  top-10 right-[0px] opacity-10 text-[#8f8577] overflow-hidden '>
    <p className='text-9xl font-bold text-shadow-[#4e3e28] text-shadow-lg'>Caffeine</p>
    <p className='text-9xl font-bold text-shadow-[#4e3e28] text-shadow-lg'>Caffeine</p>
    <p className='text-9xl font-bold text-shadow-[#4e3e28] text-shadow-lg'>Caffeine</p>
    <p className='text-9xl font-bold text-shadow-[#4e3e28] text-shadow-lg'>Caffeine</p>
    <p className='text-9xl font-bold text-shadow-[#4e3e28] text-shadow-lg'>Caffeine</p>
    
  </div>
  </motion.div>
  
  
 
    
  
</>
  )
}

export default Hero
