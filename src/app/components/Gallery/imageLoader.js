"use client"
import React from 'react'
import { motion } from "motion/react"
const ImageLoader = () => {

    const arr=[
  "https://images.pexels.com/photos/1833769/pexels-photo-1833769.jpeg?_gl=1*1shmpcl*_ga*MTU0MTk1NDM3Mi4xNzUxMTgzNTcx*_ga_8JE65Q40S6*czE3NTM1NTgzMjkkbzIzJGcxJHQxNzUzNTU4NDU5JGoyOSRsMCRoMA..",
  "https://images.pexels.com/photos/1863622/pexels-photo-1863622.jpeg?_gl=1*1kznems*_ga*MTU0MTk1NDM3Mi4xNzUxMTgzNTcx*_ga_8JE65Q40S6*czE3NTM1NTgzMjkkbzIzJGcxJHQxNzUzNTU4NDI4JGo2MCRsMCRoMA..",
  "https://plus.unsplash.com/premium_photo-1663932464790-bb9f57550346?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhZmUlMjBpbnRlcmlvcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1624878359797-3fa83912b96a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FmZSUyMGludGVyaW9yfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1482350325005-eda5e677279b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmZXxlbnwwfDB8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1571168136613-46401b03904e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTYzfHxjYWZlfGVufDB8MHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGNhZmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1658386322016-75f003b1ffa0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FmZSUyMHZpYmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1658386321892-7139f2e6d5cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FmZSUyMHZpYmV8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1658386321667-5dbf6ac21f9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhZmUlMjB2aWJlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1658386321885-0b180ba0245d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FmZSUyMHZpYmV8ZW58MHx8MHx8fDA%3D"


]

  return (
    <>
     <div className='w-full h-fit columns-3  px-5 pt-10  '>

    {arr.map((item,index)=>{
      return (
        
                <motion.div
              className="  "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >

        <img key={index} className=' shadow-2xl hover:drop-shadow-2xl hover:scale-101 transition-shadow max-w-[100%] mb-3 rounded-xl object-cover ' src={item} alt="" />
            </motion.div>
      )
    })}
   </div>
    </>
  )
}

export default ImageLoader
