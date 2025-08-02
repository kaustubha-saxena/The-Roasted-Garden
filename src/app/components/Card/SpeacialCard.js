import React from 'react'

const SpeacialCard = ({item}) => {
  return (
    <>
    <div className='min-w-[300px] h-fit overflow-hidden hover:scale-105 hover:transition-transform duration-300 hover:cursor-pointer'>
        <img className='min-w-[300px] h-[300px] rounded-xl object-cover' src={`${item.image}`} alt="" />
        <div className='mt-3 px-3'>

        <h6 className='font-semibold'>{item.name}</h6>
        <p className='text-sm text-[#494949]'>{item.description}</p>
        </div>
    </div>
    </>
  )
}

export default SpeacialCard
