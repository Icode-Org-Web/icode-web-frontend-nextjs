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
                <div className={styles.Tabs}><Link href="/Partner">Partner</Link></div>
                <div className={styles.TabsNotSelected}><Link href="/Services">Services</Link></div>
                <div className={styles.TabsNotSelected}><Link href="/Team">Team</Link></div>
                <div className={styles.TabsNotSelected}><Link href="/Contact">Contact Us</Link></div>
            </div>
        </div>
    )
}