"use client"
import React from 'react'
import { motion } from "motion/react"
const About = () => {
  return (
   <>
   <div className='relative w-full h-fit'>

 

      <div className='w-full h-[60vh]  px-20 overflow-hidden bg-[#1b1108]  relative'>
        <img className=' object-cover w-full h-full' src="/aboutHero.jpg" alt="" />
      </div>


      <div className='w-full h-fit py-10 bg-[#ebd3ac]'>

      <div className='px-20  bg-[#ebd3ac] py-10 flex jsucetify-centre items-center '>
     

       
        <div className='flex flex-col justify-center items-start gap-5 w-full'>
          <h3 className='text-4xl font-bold '>Meet the Founder</h3>
          <p className='text-lg leading-relaxed '>Amelia is more than the heart behind The Roasted Garden—she’s the spark that keeps it alive. A lifelong lover of coffee and community, she turned her passion into purpose. With a background in sustainable agriculture and hospitality, Amelia brings a unique blend of eco-conscious values and customer-first thinking. Her mission? To make coffee more personal, more mindful, and more magical.
          </p>
        </div>
      

        <div className='w-full flex justify-center items-center'>

        <img className='w-[80%] rounded-xl' src="/about/founder.jpg" alt="" />
        </div>
        
      </div>

          


          
      <div className='px-20  bg-[#ebd3ac] py-10 flex jsucetify-centre items-center '>

        <motion.div
             className="w-[40%]  "
             initial={{ opacity: 0, x: "-200px" }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.8,  }}
             >
        <div className='w-full flex justify-center items-center'>
          <img className='w-[80%] rounded-xl' src="/about/cafe.jpg" alt="" />
        </div>
        </motion.div> 

       <motion.div
             className="w-[60%]  "
             initial={{ opacity: 0, x: "200px" }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 1,  }}
             >

        <div className='flex flex-col justify-center items-start gap-5 w-full'>
          <h3 className='text-4xl font-bold '>Brewing Dreams into Reality</h3>
          <p className='text-lg leading-relaxed '>What began as a simple idea soon transformed into a heartfelt mission—to craft a cozy haven where people could connect, relax, and share moments over exceptional coffee. Inspired by a love for great brews and meaningful conversations, our founder, Amelia, set out to build more than just a café. She dreamed of a space filled with warmth, community spirit, and purpose. With a deep-rooted passion for quality and a strong commitment to sustainability, Amelia turned her vision into a reality—one cup at a time.
          </p>
        </div>
          </motion.div>

      </div>



<div className='px-20  bg-[#ebd3ac] py-10 flex jsucetify-centre items-center '>
       <motion.div
             className="w-[60%]  "
             initial={{ opacity: 0, x: "-200px" }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.8,  }}
             >

       
        <div className='flex flex-col justify-center items-start gap-5 w-full'>
          <h3 className='text-4xl font-bold '>What We Serve</h3>
          <p className='text-lg leading-relaxed '>From our signature roasts to seasonal specials, every item on our menu is crafted with care. We offer a wide range of hot and cold brews, plant-based options, and fresh bites made with locally sourced ingredients. Whether you’re into bold espressos, delicate pour-overs, or creamy lattes topped with botanical flavors—you’ll find something that feels just right.
          </p>
        </div>
          </motion.div>

           <motion.div
             className="w-[40%]  "
             initial={{ opacity: 0, x: "200px" }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.8,  }}
             >

        <div className='w-full flex justify-center items-center'>

        <img className='w-[80%] rounded-xl' src="/about/latte2.jpg" alt="" />
        </div>
          </motion.div>
      </div>




 <div className='px-20  bg-[#ebd3ac] py-10 flex jsucetify-centre items-center '>

        <motion.div
             className="w-[40%]  "
             initial={{ opacity: 0, x: "-200px" }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 0.8,  }}
             >
        <div className='w-full flex justify-center items-center'>
          <img className='w-[80%] rounded-xl' src="/about/ourSpace.jpg" alt="" />
        </div>
        </motion.div> 

       <motion.div
             className="w-[60%]  "
             initial={{ opacity: 0, x: "200px" }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, amount: 0.2 }}
             transition={{ duration: 1,  }}
             >

        <div className='flex flex-col justify-center items-start gap-5 w-full'>
          <h3 className='text-4xl font-bold '>Our Space</h3>
          <p className='text-lg leading-relaxed '>Imagine walking into a sunlit nook, filled with the aroma of fresh coffee and the calm of a hidden garden. That’s the vibe we’ve nurtured here. With warm lighting, cozy seating, and touches of greenery everywhere, The Roasted Garden is designed to help you slow down and savor the moment. Whether you’re working, reading, or catching up with friends, this is your space too.
          </p>
        </div>
          </motion.div>

      </div>
    



 

  

               </div>
    </div>
   </>
  )
}

export default About
