import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className={styles.FooterContainer}>
        <div style={{backgroundColor:'red',height:'100%',width:'20%'}}>
            <Image 
            src="/images.png"
            height={200}
            width={200}
            alt='Logo'/>
        </div>
        <div style={{height:'100%'}}>
            <h2 style={{marginBottom:'8%'}}>Contact Details</h2>

            <p>Hotline - (+94) 11 234 5678</p>
            <p>Hotline - (+94) 11 234 5678</p>
            <p style={{textAlign:'right'}}>(+94) 11 234 5678</p>
            <p style={{marginTop:'8%'}}>Email - example@gmail.com</p>
        </div>
        <div style={{backgroundColor:'white', height:'100%',width:'20%'}}>
        </div>
    </div>
  )
}
