import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div style={{width:'100%',alignItems:'ce'}}>

 <div className='Table-Container'>    
 <div className='Container'><div className='text'><p className="sm:text-sm md:text-lg lg:text-3xl">Email Address</p></div><div className="w-w-full h-1/2 md:w-3/4 md:h-48 lg:w-700px lg:h-64"><input type='email'/></div></div>
 <div className='Container'><div className='text'><p className="sm:text-sm md:text-md lg:text-3xl">Name</p></div>
 <div className="w-w-full h-1/2 md:w-3/4 md:h-48 lg:w-700px lg:h-64"><input type='email'/></div></div>
 <div className='Container'><div className='text'><p className="sm:text-sm md:text-md lg:text-3xl">Message</p></div><div ></div></div>
 <div className='Container'></div>
 <div className='Container'><div className='Button'><div className='btn_Container'><button className='btn'><p className="sm:text-sm md:text-md lg:text-3xl">
   Send</p></button></div></div>
</div></div>
    </div>
  )
}
