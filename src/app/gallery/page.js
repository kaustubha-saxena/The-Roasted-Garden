
import React from 'react'
import ImageLoader from '../components/Gallery/imageLoader'

const Menu = () => {
  

  return (
   <>
    <div className='bg-[#ebd3ac] w-full h-full px-10  '>
      <div className='pt-5  text-center font-bold 2xl:text-4xl xl:text-4xl lg:text-3xl   text-[#4e3e28] '>A glimpse of the cozy moments and rich aromas at The Roasted Garden</div>

  <ImageLoader/>
    </div>
   </>
  )
}

export default Menu
export const metadata = {
  title: "Gallery",
  description: "Images of The Roasted Garden",
};