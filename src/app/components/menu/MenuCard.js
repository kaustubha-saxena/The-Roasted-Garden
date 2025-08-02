import React from 'react'

const MenuCard = ({item}) => {
  console.log(item);
  
  return (
    <>
    <div className='2xl:w-[200px] xl:w-[180px] lg:w-[150px] h-fit overflow-hidden hover:scale-105 hover:transition-transform duration-300 hover:cursor-pointer '>
        <img className=' 2xl:min-w-[200px] xl:min-w-[180px] lg:min-w-[150px] 2xl:h-[200px] xl:h-[180px] lg:h-[150px] object-center hover:shadow-lg' src={`${item.image}`} alt="" />
        <div className='mt-3 px-3 '>

        <h6 className='leading-5 font-semibold truncate 2xl:text-xl  xl:text-base lg:text-sm'>{item.name}</h6>
        <p className='leading-5 truncate  2xl:text-base xl:text-sm lg:text-xs text-[#494949]'>{item.description}</p>
        <div className='w-full  flex justify-between items-center ' >
          <div><p className='font-bold 2xl:text-lg xl:text-base lg:text-sm text-[#543b35] py-1'>{item.price}</p></div>
          <button className='xl:text-sm lg:text-xs/tight py-1 rounded-sm font-medium px-2  bg-[#543b35] hover:bg-[#1b1108] text-white '>Add to cart</button>
          </div>
        </div>
    </div>
    </>
  )
}

export default MenuCard
