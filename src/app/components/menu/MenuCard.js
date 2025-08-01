import React from 'react'

const MenuCard = ({item}) => {
  console.log(item);
  
  return (
    <>
    <div className='w-[200px] h-fit overflow-hidden hover:scale-105 hover:transition-transform duration-300 hover:cursor-pointer '>
        <img className=' min-w-[200px] h-[200px]  object-center hover:shadow-lg' src={`${item.image}`} alt="" />
        <div className='mt-3 px-3 '>

        <h6 className='leading-5 font-semibold text-lg truncate'>{item.name}</h6>
        <p className='leading-5 truncate  text-sm text-[#494949]'>{item.description}</p>
        <div className='w-full  flex justify-between items-center ' >
          <div><p className='font-bold text-lg text-[#543b35] py-1'>{item.price}</p></div>
          <button className='text-sm py-1 rounded-sm font-medium px-2  bg-[#543b35] hover:bg-[#1b1108] text-white '>Add to cart</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default MenuCard
