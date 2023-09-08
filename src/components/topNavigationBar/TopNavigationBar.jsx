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
                <div className={styles.Tabs}><Link href="/Partner"><p className="text-sm:8px md:10px lg:26px">Partner</p></Link></div>
                <div className={styles.TabsNotSelected}><Link href="/Services"><p className="text-sm:8px md:10px lg:26px">Services</p></Link></div>
                <div className={styles.TabsNotSelected}><Link href="/Team"><p className="text-sm:8px md:10px lg:26px">Team</p></Link></div>
                <div className={styles.TabsNotSelected}><Link href="/Contact"><p className="text-sm:8px md:10px lg:26px">Contact Us</p></Link></div>
            </div>
        </div>
    )
}