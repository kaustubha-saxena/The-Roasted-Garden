"use client"
import React from 'react'
import { motion } from "motion/react"
import { useState } from 'react'
const Reservation = () => {
    const [form, setform] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        req: ""

    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setform((prevForm) => ({
            ...prevForm,
            [id]: value,
        }));
    }
    return (
        <>
            <div className='relative w-full h-fit'>

                <div className='w-full h-120 px-20  bg-[#1b1108] object-none  flex justify-center items-center  overflow-hidden relative'>
                    <img className='w-full' src="/reservation/reservations.jpg" alt="" />

                    <div className='absolute top-0 left-30  w-[40%] h-full flex justify-center items-start gap-3 z-20  flex-col  font-bold text-white '>
                        <motion.div
                            initial={{ opacity: 0, y: "0px" }}
                            animate={{ opacity: 1, y: "-20px" }}
                            transition={{ duration: 1, delay: 0 }}
                            className='w-full h-fit  '
                        >

                            <p className='text-2xl'>Reserve Your Table in Just a Few Clicks</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: "0px" }}
                            animate={{ opacity: 1, y: "-20px" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className='w-full h-fit  '
                        >

                            <h3 className='text-4xl'>Because Great Dates Deserve Great Tables</h3>
                        </motion.div>
                    </div>

                    <div className=' absolute top-0 w-full h-full bg-black opacity-30'></div>
                </div>

                <div className='w-full h-fit py-10 bg-[#ebd3ac] px-20 '>


                    <form action="" className='flex flex-wrap  gap-3 px-30 justify-center'>
                        {/* <div className='flex flex-col justify-start w-[80%] '>
                            <label className='font-semibold' htmlFor="first_name">Name</label>
                            <div className='flex w-full gap-5'>
                                <input className='  py-2 text-slate-800 w-full border-3 font-medium  border-[#b4804d] px-2' placeholder='First Name' required type="text" value={form.first_name} onChange={handleChange} id='first_name' />
                                <input className='  py-2 text-slate-800 w-full border-3 font-medium border-[#b4804d] px-2' placeholder='Last Name' type="text" id='first_name' value={form.last_name} onChange={handleChange} />
                            </div>
                        </div> */}
                        <div className='flex flex-col justify-start  w-[40%] '>
                            <label className='font-semibold' htmlFor="phone">First Name</label>
                            <input className='  py-2 text-slate-800 w-full border-3 font-medium min-w-[50%] border-[#b4804d] px-2' placeholder='Phone Number' required type="text" id="first_name" value={form.first_name} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col justify-start  w-[40%] '>
                            <label className='font-semibold' htmlFor="phone">Last Name</label>
                            <input className='  py-2 text-slate-800 w-full border-3 font-medium min-w-[50%] border-[#b4804d] px-2' placeholder='Phone Number' required type="text" id="last_name" value={form.last_name} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col justify-start  w-[40%] '>
                            <label className='font-semibold' htmlFor="phone">Phone Number</label>
                            <input className='  py-2 text-slate-800 w-full border-3 font-medium min-w-[50%] border-[#b4804d] px-2' placeholder='Phone Number' required type="text" id="phone" value={form.phone} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col justify-start   w-[40%] '>
                            <label className='font-semibold' htmlFor="email">Email</label>
                            <input className='  py-2 text-slate-800 w-full border-3 font-medium min-w-[50%] border-[#b4804d] px-2' placeholder='Email' type="email" id='email' value={form.email} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col justify-start  w-[40%]'>
                            <label className='font-semibold' htmlFor="date">Reservation Date</label>
                            <input className='  py-2 text-slate-800 w-full border-3 font-medium min-w-[50%] border-[#b4804d] px-2' placeholder='DDMMYYYY' required type="date" id='date' value={form.date} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col justify-start  w-[40%]'>
                            <label className='font-semibold' htmlFor="time">Reservation Time</label>
                            <input className='  py-2 text-slate-800 w-full border-3 font-medium border-[#b4804d] px-2' placeholder='time' type="time" id='time' required value={form.time} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col justify-start  w-[40%]'>
                            <label className='font-semibold' htmlFor="guests">How many guests will be joining you?</label>
                            <input className='  py-2 text-slate-800 w-full border-3 font-medium border-[#b4804d] px-2' placeholder='Number of guests' type="number" id='guests' required value={form.guests} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col justify-start  w-[40%]'>
                            <label className='font-semibold' htmlFor="req">Special Requests</label>
                            <input className='  py-2 text-slate-800 w-full border-3 font-medium border-[#b4804d] px-2' placeholder='Let us know your preferences (e.g. seating, allergies, etc.)' type="text" id='req' value={form.req} onChange={handleChange} />
                        </div>
                        <div className='w-full flex justify-center my-10'>
                            <input type="submit" className=' py-3 px-50 font-bold text-center border-0 hover:bg-[#c29064] bg-[#d2aa89] ' />
                        </div>
                    </form>
                    {/* <div className='px-20  bg-[#ebd3ac] py-10 flex jsucetify-centre items-center '>

                        <motion.div
                            className="w-[40%]  "
                            initial={{ opacity: 0, x: "-200px" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, }}
                        >
                            <div className='w-full flex justify-start items-center'>
                                <img className='w-[80%] rounded-xl' src="/about/ourSpace.jpg" alt="" />
                            </div>
                        </motion.div>

                        <motion.div
                            className="w-[60%]  "
                            initial={{ opacity: 0, x: "200px" }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 1, }}
                        >

                            <div className='flex flex-col justify-start items-start gap-5 w-full'>
                                <h3 className='text-4xl font-bold '>Our Space</h3>
                                <p className='text-lg leading-relaxed '>Imagine walking into a sunlit nook, filled with the aroma of fresh coffee and the calm of a hidden garden. That’s the vibe we’ve nurtured here. With warm lighting, cozy seating, and touches of greenery everywhere, The Roasted Garden is designed to help you slow down and savor the moment. Whether you’re working, reading, or catching up with friends, this is your space too.
                                </p>
                            </div>
                        </motion.div>

                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Reservation
