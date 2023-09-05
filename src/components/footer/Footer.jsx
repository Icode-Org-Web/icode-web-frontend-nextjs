import React from 'react'
import {BsFacebook,BsTwitter} from 'react-icons/bs'
import {PiInstagramLogoFill} from 'react-icons/pi'
import Logo from '../../../public/iCode_logo.png'
import './Style.css'


export default function Footer() {
    const Number_one = '(+94) 11 234 5678';
    const Number_two = '(+94) 11 234 5678';
    const Number_three = '(+94) 11 234 5678';
    const Email = 'example@gmail.com';
    
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black pt-1 text-white flex justify-around items-center lg:h-1/4 sm:h-1/5">
        <div className="Flex justify-center">
            <img 
            src="/iCode_logo.png"
            alt='Logo' 
            style={{height:'auto',width:'100px'}}
           />
        </div>
        <div className='flex font-mono flex-col justify-center'>
            <h2 style={{marginBottom:'8%'}} className="text-sm md:text-base lg:text-lg">Contact Details</h2>

            <p className="text-sm md:text-base lg:text-lg">Hotline -{Number_one} </p>
            <p className="text-sm md:text-base lg:text-lg">Hotline -{Number_two} </p>
            <p style={{textAlign:'right'}} className="text-sm md:text-base lg:text-lg">{Number_three}</p>
            <p style={{marginTop:'8%'}} className="text-sm md:text-base lg:text-lg">Email -{Email} </p>
        </div>
        <div className='FooterSectionicons'>
           <div><BsTwitter fill="#5089B2" className="sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8"/></div>
           <div> <BsFacebook fill="#8CBDD2" className="sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8"/></div>
            <div><PiInstagramLogoFill fill='#FCDDAE' className="sm:h-4 sm:w-4 md:h-6 md:w-6 lg:h-8 lg:w-8"/></div>
            
        </div>
    </div>
  )
}
