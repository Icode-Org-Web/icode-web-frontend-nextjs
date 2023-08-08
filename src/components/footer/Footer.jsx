import React from 'react'
import {BsFacebook,BsTwitter} from 'react-icons/bs'
import {PiInstagramLogoFill} from 'react-icons/pi'
import './Style.css'
import Image from './profile.jpg'


export default function Footer() {
    const Number_one = '(+94) 11 234 5678';
    const Number_two = '(+94) 11 234 5678';
    const Number_three = '(+94) 11 234 5678';
    const Email = 'example@gmail.com';
    
  return (
    <div className='FooterContainer'>
        <div className="FooterSection">
            <img 
            src={Image}
            alt='Logo' 
            style={{height:'40px',width:'200px'}}/>
        </div>
        <div className='Footer-Contact-Details-Container'>
            <h2 style={{marginBottom:'8%'}}>Contact Details</h2>

            <p>Hotline -{Number_one} </p>
            <p>Hotline -{Number_two} </p>
            <p style={{textAlign:'right'}}>{Number_three}</p>
            <p style={{marginTop:'8%'}}>Email -{Email} </p>
        </div>
        <div className='FooterSectionicons'>
           <div><BsTwitter className='Twitter-Icon'/></div>
           <div> <BsFacebook className='FB-Icon'/></div>
            <div><PiInstagramLogoFill className='Insta-Icon'/></div>
            
        </div>
    </div>
  )
}
