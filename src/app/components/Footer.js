"use client";
import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className='w-full h-fit bg-[#c38854] relative text-black bottom-0'>
        <div className='flex justify-start items-start px-20 py-10'>
          <div className='w-[50%] flex flex-col justify-start gap-5'>
            <h3 className='text-3xl font-bold'>The Roasted Garden</h3>
            <p className='text-sm'>Brewed with love, one cup at a time.</p>
            <div className='flex justify-start items-center gap-5'>
              <Link href={"https://x.com/KaustubhaSaxena"}><img src="/icons/x.png" alt="" /></Link>
              <Link href={"https://www.instagram.com/kaustubha.saxena/"}><img src="/icons/instagram.png" alt="" /></Link>
              <Link href={"https://github.com/kaustubha-saxena/The-Roasted-Garden"}><img src="/icons/github.png" alt="" /></Link>

            </div>
            <div>

              <button onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }} className='hover:cursor-pointer px-4 py-2 border-2 border-b-amber-100'>BACK TO TOP</button>
            </div>
          </div>
          <div className='w-[25%]'>
            <h6 className=' font-medium'>Sitemap</h6>
            <ul className='py-5 flex flex-col gap-2'>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/menu"}>Menu</Link></li>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/reservations"}>Reservatioins</Link></li>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/menu"}>Order Online</Link></li>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/gallery"}>Gallery</Link></li>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/about"}>About Us</Link></li>

              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/findus"}>Find Us</Link></li>
            </ul>
          </div>
          <div className='w-[25%]'>
            <h6 className=' font-medium'>Sitemap</h6>
            <ul className='py-5 flex flex-col gap-2'>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/menu"}>Menu</Link></li>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/reservations"}>Reservatioins</Link></li>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/menu"}>Order Online</Link></li>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/gallery"}>Gallery</Link></li>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/about"}>About Us</Link></li>
              <li ><Link className='relative after:content-[""] after:w-0 after:h-[1px] after:bg-black after:absolute after:bottom-0 after:left-0  hover:after:w-[100%] hover:after:transition-transform after:duration-600' href={"/findus"}>Find Us</Link></li>

            </ul>
          </div>


        </div>


        {/* <div className='absolute bottom-0 w-full h-fit bg-[#1b1108] text-center text-sm fomt-semibold text-[#00000] '>
          Copyright &copy; 2025 The Roasted Garden. All rights reserved.
        </div> */}
      </div>
    </>
  )
}

export default Footer
