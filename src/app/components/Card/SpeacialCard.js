import React from 'react'

const SpeacialCard = ({item}) => {
  return (
    <>
    <div className=' 2xl:w-[300px] xl:w-[250px] lg:w-[200px] h-fit overflow-hidden hover:scale-105 hover:transition-transform duration-300 hover:cursor-pointer py-2'>
        <img className='2xl:min-w-[300px] xl:w-[250px] lg:w-[200px] 2xl:h-[300px] xl:h-[250px] lg:h-[200px] rounded-xl object-cover' src={`${item.image}`} alt="" />
        <div className='mt-3 px-3'>

        <h6 className='font-semibold truncate 2xl:text-xl  xl:text-base lg:text-sm'>{item.name}</h6>
        <p className=' truncate text-[#494949] 2xl:text-base xl:text-sm lg:text-xs '>{item.description}</p>
        </div>
    </div>
    </>
  )
}

export default SpeacialCard
