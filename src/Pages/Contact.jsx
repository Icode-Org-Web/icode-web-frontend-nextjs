import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div style={{width:'100%',alignItems:'center'}}>

 <div className='Table-Container'>    
 <div className="lg:w-3/4 md:1/2 flex justify-between mt-1"><div><p className='text-xl'>Email Address</p></div>
 <div><input type='email' className=" bg-black rounded-2xl md:w-1 lg:w-96"/></div></div>
 <div className="lg:w-3/4 md:1/2 flex justify-between mt-1"><div><p className='text-xl'>Name</p></div>
 <div><input type='text' className="bg-black rounded-2xl md:w-1 lg:w-96"/></div></div>
 <div className="lg:w-3/4 md:1/2 flex justify-between mt-1"><div><p className='text-xl'>Message</p></div><div ><textarea className="bg-black rounded-2xl md:w-1 lg:w-96"/></div></div>
 <div></div>
 <div><div className='md:w-1 lg:w-96 flex justify-end mt-1'><div className='btn_Container'><button className='bg-blue'><p className='text-xl'>Send</p></button></div></div>
</div></div>
    </div>
  )
}
