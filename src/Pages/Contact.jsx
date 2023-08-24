import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div>

 <div className='Table-Container'>    
 <div className='Container'><div className='text'>Email Address</div><div><input type='email'/></div></div>
 <div className='Container'><div className='text'>Name</div><div><input type='email'/></div></div>
 <div className='Container'><div className='text'>Message</div><div><textarea/></div></div>
</div>
 {/* <table class="table-auto">
  <tbody>
    <tr>
      <td class="w-full md:w-0 py-5" style={{textAlign:'center'}}>Email Address</td>
      <td class="w-full h-1/2 py-5"><input type="email" style={{backgroundColor:"black",borderRadius:'4px',color:'white'}}/></td>
    </tr>
    <tr>
      <td class="w-full  py-5">Name</td>
      <td class="w-full py-5"><input type="text" style={{backgroundColor:"black",borderRadius:'4px',width:'100%',color:'white'}}/></td>
    </tr>
    <tr>
      <td class="w-full py-5">Message</td>
      <td class="w-full py-10"><textarea rows={5}  style={{backgroundColor:"black",borderRadius:'4px',width:'100%',color:'white'}}/></td>
    </tr>
  </tbody>
</table> */}
{/* </div> */}
    </div>
  )
}
