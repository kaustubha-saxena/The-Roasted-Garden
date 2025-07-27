import React from 'react'

const MenuCard = () => {
  return (
    <>
    <div className='w-[200px] h-fit overflow-hidden hover:scale-105 hover:transition-transform duration-300 hover:cursor-pointer '>
        <img className='min-w-[200px] h-[200px]  object-center hover:shadow-lg' src="/ProductImages/SignatureLattes.png " alt="" />
        <div className='mt-3 px-3'>

        <h6 className='font-semibold text-lg'>Signature Lattes</h6>
        <p className='text-sm text-[#494949]'>Experience our unique latte art and flavor combinations.</p>
        <div className='w-full  flex justify-between items-center ' >
          <div><p className='font-bold text-lg text-[#543b35] '>₹ 200</p></div>
          <button className='text-sm py-1 rounded-sm font-medium px-2  bg-[#543b35] hover:bg-[#1b1108] text-white '>Add to cart</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default MenuCard
