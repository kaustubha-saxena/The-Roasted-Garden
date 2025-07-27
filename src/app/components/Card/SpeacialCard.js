import React from 'react'

const SpeacialCard = () => {
  return (
    <>
    <div className='w-[300px] h-fit overflow-hidden hover:scale-105 hover:transition-transform duration-300 hover:cursor-pointer'>
        <img className='min-w-[300px] h-[300px] rounded-xl object-center' src="/ProductImages/SignatureLattes.png" alt="" />
        <div className='mt-3 px-3'>

        <h6 className='font-semibold'>Signature Lattes</h6>
        <p className='text-sm text-[#494949]'>Experience our unique latte art and flavor combinations.</p>
        </div>
    </div>
    </>
  )
}

export default SpeacialCard
