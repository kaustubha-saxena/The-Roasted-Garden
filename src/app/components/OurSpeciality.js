import React from 'react'
import SpeacialCard from './Card/SpeacialCard'
const OurSpeciality = () => {
  return (
   <>
   <div className='bg-[#efdfc5] h-fit'>
 <div className='flex justify-start items-center px-10 py-5'>

   <h3 className='text-3xl font-semibold'>Our Specialties</h3>
 </div>
   <div className='flex justify-center items-center gap-3  py-10'>

<SpeacialCard/>
<SpeacialCard/>
<SpeacialCard/>
<SpeacialCard/>

   </div>
   </div>
   </>  )
}

export default OurSpeciality
