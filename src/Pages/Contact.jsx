import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div style={{width:'100%',alignItems:'center'}}>

 <div className='Table-Container'>    
 <div className="w-10/12 lg:w-2/3 flex justify-between mt-1"><div><p className='text-sm lg:text-xl'>Email Address</p></div>
 <div className='flex justify-end'><input type='email' className=" bg-black rounded-2xl w-11/12 lg:w-96"/></div></div>
 <div className="w-10/12 lg:w-2/3 flex justify-between mt-1"><div className='w-1/4'><p className='text-sm lg:text-xl'>Name</p></div>
 <div className='flex justify-end'><input type='text' className="bg-black rounded-2xl w-11/12 lg:w-96"/></div></div>
 <div className="w-10/12 lg:w-2/3 flex justify-between mt-1"><div><p className='text-sm lg:text-xl'>Message</p></div><div className='flex justify-end' >
  <textarea className="bg-black rounded-2xl w-11/12 lg:w-96"/></div></div>
 <div></div>
 <div><div className='w-10/12 lg:w-2/3 flex justify-between mt-1'><div className='btn_Container'><button className='bg-blue'><p className='text-xl'>Send</p></button></div></div>
</div></div>
    </div>
  )
}
