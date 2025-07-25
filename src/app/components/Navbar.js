import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <>
      <nav className=' sticky top-0 w-[100vw] h-15  flex justify-between items-center px-10 after:content-[""] after:w-full after:h-[2px]  after:absolute after:bottom-0 after:left-0 z-99  bg-[#1b1108]'>
        <div className="logo">
          <h3 className='text-white  font-extrabold text-xl'>The Roasted Garden</h3>
        </div>
        <ul className='flex justify-center items-center gap-4 text-[#6e6e6e] text-white font-semibold  text-sm '>
          
          <li ><Link className='relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#b1b1b1] after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-300' href={"/menu"}>Menu</Link></li>
          <li ><Link className='relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#b1b1b1] after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-300' href={"/reservations"}>Reservatioins</Link></li>
          <li ><Link className='relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#b1b1b1] after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-300' href={"/menu"}>Order Online</Link></li>
          <li ><Link className='relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#b1b1b1] after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-300' href={"/about"}>About Us</Link></li>
          <li ><Link href={"/order"}>
        <button className='px-4 bg-[#f3d3a1] py-2 rounded-lg hover:cursor-pointer hover:bg-[#ceb998] shadow-sm shadow-[#cca361] text-black font-bold'>Find Us</button>
      </Link></li>

        </ul>
      </nav>
    </>
  )
}

export default Navbar
