import React from 'react'
import Link from 'next/link';
const FindUs = () => {
  return (
   <>

<div className='w-full h-fit px-40 py-10 bg-[#ebd3ac]'>


   <div className='relative w-full  h-100  '>
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7768.83420373329!2d77.7084680906877!3d13.199109548550162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1cfe75446265%3A0x296c70e9a129418e!2sKempegowda%20International%20Airport%20Bengaluru!5e0!3m2!1sen!2sin!4v1753901705959!5m2!1sen!2sin" 
            width="100"
            height="200"
            style={{ border: 0,  top: 0, left: 0, width: '100%', height: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Embedded Google Map"
            className='rounded-2xl'
            ></iframe>
            </div>

<div className='py-10'>

            <div className='py-4'>
                <h6 className='text-lg font-bold'>Our Loacation</h6>
                <p>Kempegowda International Airport Bengaluru</p>
            </div>
            <div  className='py-4'>
                <h6 className='text-lg font-bold'>Contact Information</h6>
                <p>phone:1234567890</p>
                <p>Email:info@theroastedgarden.com</p>
            </div>
            <div  className='py-4'>
                <h6 className='text-lg font-bold'>Follow Us</h6>
               <div className='flex justify-start items-center gap-5 py-2'>
              <Link href={"https://x.com/KaustubhaSaxena"}><img src="/icons/x.png" alt="" /></Link>
              <Link href={"https://www.instagram.com/kaustubha.saxena/"}><img src="/icons/instagram.png" alt="" /></Link>
              <Link href={"https://github.com/kaustubha-saxena/The-Roasted-Garden"}><img src="/icons/github.png" alt="" /></Link>

            </div>
            </div>

</div>
            </div>
   </>
  )
}

export default FindUs
