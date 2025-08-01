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
                            <input type="submit" value={"Reserve Now"} className=' py-3 px-50 font-bold text-center border-0 hover:bg-[#c29064] bg-[#d2aa89] ' />
                        </div>
                    </form>
                    
                </div>
            </div>
        </>
    )
}

export default Reservation
