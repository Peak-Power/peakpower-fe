import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/imgs/logo.png'
import logo_w from '../public/imgs/logo_d.png'
import container from '../public/imgs/peakpower_onsite_l.png'
import flex from '../public/imgs/flex.png'
import sibb from '../public/imgs/backers/sibb.png'
import ber from '../public/imgs/backers/ber.png'
import eu from '../public/imgs/backers/eu.png'
import esf from '../public/imgs/backers/esf.png'
import antler from '../public/imgs/backers/antler.svg'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { Widget } from '@typeform/embed-react'
import Menu from './Menu.js'
import Collapsible from './Collapsible.js'

import solar from '../public/imgs/renew/13.jpg'


function useScrollToElementTop(targetRef, className) {
    const ref = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const elementTop = targetRef.current.getBoundingClientRect().top;

            if (elementTop > 0) {
                ref.current.classList.remove(className);
            } else {
                ref.current.classList.add(className);
            }

            const menuItems = document.querySelectorAll('.menu a');

            menuItems.forEach((item) => {
                const { top } = item.getBoundingClientRect();
                const isItemScrolled = top < 0;
                item.classList.toggle('scrolled', isItemScrolled);
                if (isItemScrolled) {
                    console.log("scrolled")
                }

            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return ref;
}


export default function Home({ content }) {

    const targetRef = useRef();
    const navbarRef = useScrollToElementTop(targetRef, styles.sticky);
    const logoRef = useScrollToElementTop(targetRef, styles.sticky);

    const videoRef = useRef(null);

    useEffect(() => {
        try {
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, [logoRef]);

    useEffect(() => {
        const videoElement = videoRef.current;

        const playVideo = () => {
            videoElement.play().catch(error => {
                console.log('Autoplay failed:', error);
            });
        };

        playVideo();

        return () => {
            videoElement.pause();
        };
    }, []);

    return (
        <div className={styles.container}>
            <Head>
                <title>Peak Power</title>
                <meta name="description" content={content.description} />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.fix}>
                <video ref={videoRef} muted loop className={styles.video}>
                    <source src="./videos/wind1.mp4" type="video/mp4" />
                </video>
            </div>
            <div className={styles.fix}>
                <div className={styles.logo}>
                    <Image
                        src={logo}
                        priority={true}
                        loading='eager'
                    />
                    <p className={styles.description}>
                        {content.slogan}
                    </p>
                </div>
            </div>

            <main className={styles.main}>

                <div className={`${styles.blackStripe} ${styles.navbar}`} ref={navbarRef}>
                    <Menu lang={content.lang} />
                </div>
                <div className={styles.navlogo} ref={logoRef}>
                    <Link href="#"><a>
                        <Image
                            src={logo_w}
                            layout='fill'
                            objectFit='contain'
                        />
                    </a>
                    </Link>
                </div>
                <div className={styles.blackStripe} ref={targetRef} id="about"></div>

                <div className={styles.whiteStripe}>
                    <div className={styles.product}>
                        <div className={styles.text}>
                            <h2>
                                {content.about.header}
                            </h2>
                            {content.about.description}
                        </div>
                        <div className={styles.col}>
                            <Image
                                src={content.about.image}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='center'
                                placeholder='blur'
                            />
                        </div>
                    </div>
                </div>


                <div className={styles.blackStripe} id="solution">
                    <h2>Solution</h2>
                </div>

                <div className={styles.whiteStripe}>
                    <div className={styles.product_vertical}>
                        {content.solution.sections.map((s, i) => {
                            return (
                                <div key={i} className={styles.text}>
                                    <h2>{s.title}</h2>
                                    <hr className={styles.red} />
                                    <div>{s.content}</div>
                                </div>
                                // <Collapsible title={s.title} content={s.content} />
                            )
                        })}
                    </div>
                </div>

                <div className={styles.blackStripe} id="partners">
                    <h2>PARTNERS</h2>
                </div>


                <div className={styles.whiteStripe}>
                    <div className={styles.product_vertical}>
                        <div className={styles.text}>
                            <h2>
                                {content.partners.header}
                            </h2>
                            {content.partners.description}
                        </div>
                    </div>
                </div>


                <div className={styles.blackStripe} id="team">
                    <h2>
                        Team
                    </h2>
                </div>

                <div className={styles.whiteStripe}>
                    <div className={styles.product_wrap}>
                        {content.team.sections.map((s, i) => {
                            return (
                                <div key={i} className={styles.text}>
                                    <div className={styles.col}>
                                    <Image
                                        src={s.image}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                    </div>
                                    <h2>{s.title}</h2>
                                    <hr className={styles.red} />
                                    <div>{s.content}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>


                <div className={styles.blackStripe} id="faq">
                    <h2>FAQ</h2>
                </div>

                <div className={styles.whiteStripe}>
                    <div className={styles.product_vertical}>
                        {content.faq.sections.map((s, i) => {
                            return (
                                <Collapsible key={i} title={s.title} content={s.content} />
                            )
                        })}
                    </div>
                </div>

                <div className={styles.blackStripe}>
                    <h2>
                        Contact
                    </h2>
                </div>

                <div className={styles.whiteStripe}>
                    <div className={styles.product}>
                        <div className={styles.text}>
                            <h4>
                                Leave us your email we&rsquo;ll get back to you
                            </h4>
                            <hr className={styles.red} />

                            <form name="contact" method="post" data-netlify="true">
                                <input type="hidden" name="form-name" value="contact" />
                                <input placeholder="you@somewhere.com" type="email" name="email"></input>
                                &nbsp;
                                <button type="submit">SEND</button>
                            </form>
                            <hr className={styles.red} />
                            <p>
                                Meet us at the <a
                                    target="_blank"
                                    href="https://goo.gl/maps/K8L52mz92fZzXPE69"
                                    rel="noreferrer"
                                >Future Energy Lab </a>
                                in Berlin
                                <br />
                                or approach us directly: <Link href="mailto:info@peakpower.io"><a>info@peakpower.io</a></Link></p>
                        </div>
                        <div className={styles.col}>
                            <Image
                                src={solar}
                                layout='fill'
                                objectFit='cover'
                                objectPosition='right'
                                placeholder='blur'
                            />
                        </div>
                    </div>
                </div>

                <div className={`${styles.blackStripe} ${styles.footer}`}>
                    <div>
                        <p>
                            <small>
                                <Link href='/imprint'>imprint</Link> | <Link href='/privacy-policy'>privacy policy</Link>
                            </small>
                        </p>
                    </div>
                    <div className={`${styles.backers} ${styles.footer}`}>
                        <div className={styles.col}></div>
                        <div className={styles.col}>
                            <Image
                                src={sibb}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className={styles.col}>
                            <Image
                                src={eu}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className={styles.col}>
                            <Image
                                src={esf}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className={styles.col}>
                            <Image
                                src={ber}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div className={`${styles.col} ${styles.smimg}`}>
                            <Image
                                src={antler}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
