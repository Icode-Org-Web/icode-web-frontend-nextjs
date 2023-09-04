import styles from './TopNavigationBar.module.css'
import Image from './images.jpg'
import Link from 'next/link'
export default function TopNavigationBar(){
    return (
        <div className={styles.Main}>
            <div className={styles.LogoContainer}>
            <img 
            src={Image}
            alt='Logo' 
            style={{height:'40px',width:'200px',backgroundColor:'red'}}/>
            </div>
            <div className={styles.TabsContainer}>
                <div className={styles.Tabs}><Link href="/Partner"><p className="text-sm md:text-base lg:text-lg">Partner</p></Link></div>
                <div className={styles.TabsNotSelected}><Link href="/Services"><p className="text-sm md:text-base lg:text-lg">Services</p></Link></div>
                <div className={styles.TabsNotSelected}><Link href="/Team"><p className="text-sm md:text-base lg:text-lg">Team</p></Link></div>
                <div className={styles.TabsNotSelected}><Link href="/Contact"><p className="text-sm md:text-base lg:text-lg">Contact Us</p></Link></div>
            </div>
        </div>
    )
}