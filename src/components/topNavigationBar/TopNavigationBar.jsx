import styles from './TopNavigationBar.module.css'
import Link from 'next/link'

export default function TopNavigationBar(){
    return (
        <div className="flex w-full items-center bg-black pt-2 pb-2">
            <div className="w-2/4 flex items-center justify-center">
            <img 
            src="/iCode_logo.png"
            alt='Logo' 
            style={{height:'auto',width:'80px',backgroundColor:'red'}}/>
            </div>
            <div className="flex w-full justify-evenly">
                <div className="flex w-1/4  h-auto border border-white rounded-full bg-gradient-to-r from-black to-black bg-clip-content-box bg-clip-border text-center items-center justify-evenly text-gray-500 cursor-pointer font-mono"><Link href="/Partner"><p className="text-sm md:10px lg:26px">Partner</p></Link></div>
                <div className="flex w-1/4 h-auto bg-gradient-to-r from-black to-black bg-clip-content-box text-center items-center justify-evenly text-gray-500 cursor-pointer font-mono"><Link href="/Services"><p className="text-sm md:text-l lg:text-xl">Services</p></Link></div>
                <div className="flex w-1/4 h-auto bg-gradient-to-r from-black to-black bg-clip-content-box text-center items-center justify-evenly text-gray-500 cursor-pointer font-mono"><Link href="/Team"><p className="text-sm md:text-l lg:text-xl">Team</p></Link></div>
                <div className="flex w-1/4 h-auto bg-gradient-to-r from-black to-black bg-clip-content-box text-center items-center justify-evenly text-gray-500 cursor-pointer font-mono"><Link href="/Contact"><p className="text-sm md:text-l lg:text-xl">Contact Us</p></Link></div>
            </div>
        </div>
    )
}