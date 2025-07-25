import React from 'react'
import Link from 'next/link'
const NavbarHero = () => {
  return (
    <>
      <nav className=' absolute top-0 w-full h-15  flex justify-between items-center px-10 after:content-[""] after:w-full after:h-[2px] after:bg-[#dfdfdf] after:absolute after:bottom-0 after:left-0 z-99'>
        <div className="logo">
          <h3 className='text-black font-semibold text-lg'>The Roasted Garden</h3>
        </div>
        <ul className='flex justify-center items-center gap-4 text-[#6e6e6e] font-medium text-sm'>
          <li ><Link className='relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#b1b1b1] after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-300' href={"/menu"}>Menu</Link></li>
          <li ><Link className='relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#b1b1b1] after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-300' href={"/reservations"}>Reservatioins</Link></li>
          <li ><Link className='relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#b1b1b1] after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-300' href={"/menu"}>Order Online</Link></li>
          <li ><Link className='relative after:content-[""] after:w-0 after:h-[2px] after:bg-[#b1b1b1] after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-300' href={"/about"}>About Us</Link></li>
          <li ><Link href={"/find-us"}><button className='text-black px-3 py-1 rounded-lg bg-amber-400  '>Find Us</button></Link></li>

        </ul>
      </nav>
    </>
  )
}

export default NavbarHero
