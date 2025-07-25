import React from 'react'
import ReviewCard from './Card/ReviewCard'
const Reviews = () => {
  return (
   <>
<div className='bg-[#] h-fit'>

<div className='flex justify-start items-center px-10 py-5'>

   <h3 className='text-3xl font-semibold'>What Our Guests Say</h3>
 </div>


   <div className='w-full h-fit bg-[#efdfc5] flex flex-col gap-4 px-10'>
   <ReviewCard/>
   <ReviewCard/>
   <ReviewCard/>
   </div>
</div>
   </>
  )
}

export default Reviews
