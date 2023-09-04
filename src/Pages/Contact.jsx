import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div>

 <div className='Table-Container'>    
 <div className='Container'><div className='text'><p className="text- sm:8px md:text-base lg:text-lg">Email Address</p></div><div className="w-w-full h-1/2 md:w-3/4 md:h-48 lg:w-700px lg:h-64"><input type='email'/></div></div>
 <div className='Container'><div className='text'><p className="text- sm:8px md:text-base lg:text-lg">Name</p></div><div className="w-w-full h-1/2 md:w-3/4 md:h-48 lg:w-700px lg:h-64"><input type='email'/></div></div>
 <div className='Container'><div className='text'><p className="text- sm:2px md:text-base lg:text-lg">Message</p></div><div ></div></div>
 <div className='Container'></div>
 <div className='Container'><div className='Button'><div className='btn_Container'><button className='btn'>Send</button></div></div>
</div></div>
    </div>
  )
}
