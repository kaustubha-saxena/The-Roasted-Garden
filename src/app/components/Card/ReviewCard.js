import React from 'react'

const ReviewCard = () => {
  return (
  <>
  <div className='w-[30%] px-5 h-fit flex flex-col justify-center items-start mx-auto my-3 '>
    <div className='flex justify-center items-center gap-2 '>
        <img className='rounded-full w-10 h-10' src="/ProductImages/SignatureLattes.png" alt="" />
        <div className='flex flex-col justify-center items-start'>
            <p className='font-semibold'>Sophia Carter</p>
            <p className='text-sm text-gray-700'>2 months ago</p>
        </div>
    </div>
        <div className='text-lg'>★★★★★★</div>
    <p>The Daily Grind is my go-to spot for a morning coffee and pastry. The atmosphere is always welcoming, and the staff is incredibly friendly. Their lattes are works of art!</p>
  </div>


  </>
  )
}

export default ReviewCard
