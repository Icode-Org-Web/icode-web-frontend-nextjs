import styles from './TopNavigationBar.module.css'
import Image from 'next/image'
export default function TopNavigationBar(){
    return (
        <div className={styles.Main} style={{backgroundColor:'black', paddingBottom:'2%',paddingTop:'2%'}}>
            <div className={styles.LogoContainer}>
            <Image
              priority
              src="/images.jpg"
              width={300}
              height={40}
              alt=""
            />
            </div>
            <div style={{display:'flex',flexDirection:'row',width:'60%',justifyContent:'right'}}>
                <button className={styles.Tabs}>Partner</button>
                <button className={styles.Tabs}>Services</button>
                <button className={styles.Tabs}>Team</button>
                <button className={styles.Tabs}>Contact Us</button>
            </div>
        </div>
    )
}