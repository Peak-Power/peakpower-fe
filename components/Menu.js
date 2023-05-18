import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Menu({ lang }) {
    if (lang === "de") {
        return (
            <div>
                <Link href='#about' onClick={() => handleClick(about)}>ÜBER PEAK POWER</Link>
                <span>|</span>
                <Link href='#solution'>LÖSUNG</Link>
                <span>|</span>
                <Link href='#partners'>PARTNER</Link>
                <span>|</span>
                <Link href='#team'>TEAM</Link>
                <span>|</span>
                <Link href='#faq'>FAQ</Link>
                <span>|</span>
                <Link href='#contact'>KONTAKT</Link>
                <span>|</span>
                <Link href='/en' className={styles.red}>
                    EN
                </Link>
            </div>
        )
    } else {
        return (
            <div className='menu'>
                <Link href='#about' onClick={() => handleClick(about)}>ABOUT</Link>
                <span>|</span>
                <Link href='#solution'>SOLUTION</Link>
                <span>|</span>
                <Link href='#partners'>PARTNER SECTION</Link>
                <span>|</span>
                <Link href='#team'>TEAM</Link>
                <span>|</span>
                <Link href='#faq'>FAQ</Link>
                <span>|</span>
                <Link href='#contact'>CONTACT</Link>
                <span>|</span>
                <Link href='/de' className={styles.red}>
                    DE
                </Link>
            </div>

        )
    }
}