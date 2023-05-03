import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/imgs/logo.png'
import logo_w from '../public/imgs/logo_d.png'
import system from '../public/imgs/system.jpg'
import container from '../public/imgs/peakpower_onsite_l.png'
import flex from '../public/imgs/flex.png'
import sibb from '../public/imgs/backers/sibb.png'
import ber from '../public/imgs/backers/ber.png'
import eu from '../public/imgs/backers/eu.png'
import esf from '../public/imgs/backers/esf.png'
import antler from '../public/imgs/backers/antler.svg'
import Link from 'next/link'
import { useEffect, useRef } from 'react'


function useScrollToElementTop(targetRef, className) {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const elementTop = targetRef.current.getBoundingClientRect().top;

      if (elementTop >= 0) {
        ref.current.classList.remove(className);
        console.log("remove top")
      } else {
        ref.current.classList.add(className);
        console.log("add top")
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ref;
}


export default function Home() {

  const targetRef = useRef();
  const navbarRef = useScrollToElementTop(targetRef, styles.sticky);
  const logoRef = useScrollToElementTop(targetRef, styles.sticky);

  return (
    <div className={styles.container}>
      <Head>
        <title>Peak Power</title>
        <meta name="description" content="A distributed balancing energy system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.fix}>
        <div className={styles.logo}>
          <Image
            src={logo}
            priority={true}
            loading='eager'
          />
          <p className={styles.description}>
            A DISTRIBUTED<br />ENERGY BALANCING<br />SYSTEM
          </p>
        </div>
      </div>

      <main className={styles.main}>

        <div className={styles.blackStripe} ref={targetRef}></div>
        <div className={`${styles.blackStripe} ${styles.navbar}`} ref={navbarRef}>
          <div>
            <Link href='#about' onClick={() => handleClick(about)}>ABOUT</Link>
            <span>|</span>
            <Link href='#for-customers'>FOR CUSTOMERS</Link>
            <span>|</span>
            <Link href='#for-partners'>FOR PARTNERS</Link>
            <span>|</span>
            <Link href='#the-team'>THE TEAM</Link>
          </div>
        </div>
        <div className={styles.navlogo} ref={logoRef}>
          <Image
            src={logo_w}
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div className={styles.whiteStripe} id="about">
          <div className={styles.product}>
            <div className={styles.text}>
              <h2>TURNING ENERGY ASSETS FROM <span className={styles.red}>STATIC</span> TO <span className={styles.red}>FLEXIBLE</span>.</h2>
              <p>
                <span className={styles.red}>Peak Power </span>
                provides the missing
                <span className={styles.red}> link </span>
                between
                <span className={styles.red}> asset operation </span>
                and
                <span className={styles.red}> market intelligence</span>
                .</p>
              <p>By combining
                <span className={styles.red}> different Energy Sources </span>
                (FCR, aFRR, EpexSpot) and analyzing multiple market signals we determine the
                <span className={styles.red}> optimal usage </span>
                for your energy assets.
                And help you make
                <span className={styles.red}> smart decisions</span>
                .</p>
            </div>
            <div className={styles.col}>
              <Image
                src={system}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                placeholder='blur'
              />
            </div>
          </div>
        </div>


        <div className={styles.blackStripe} id="for-customers">
          <h2>FOR CUSTOMERS</h2>
        </div>

        <div className={styles.whiteStripe}>
          <div className={styles.product}>

            <div className={styles.col}>
              <Image
                src={container}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                placeholder='blur'
              />
            </div>
            <div className={styles.text}>

              <h2>
                <span className={styles.red}>UNLOCK</span> THE <span className={styles.red}>RENEWABLE ENERGY</span> TRANSITION
              </h2>
              <p>
                To achieve the
                <span className={styles.red}> energy transition</span>
                , just building more
                renewables unfortunately is not enough. The
                <span className={styles.red}> energy system </span>
                and its underlying structures
                <span className={styles.red}> need </span>
                to be enhanced with
                <span className={styles.red}> smart capabilities</span>
                . Utilizing better the power that is already installed.</p>

              <h2>Why
                <span className={styles.red}>?</span>
              </h2>

              <p>Renewable Energy is an
                <span className={styles.red}> intermittent source of energy </span>
                due to fluctuating environmental conditions. It
                <span className={styles.red}> needs to be balanced </span>
                to fully replace carbon based energy supply.</p>

              <p>Peak Power optimises asset economics and at the same time
                contributes to
                <span className={styles.red}> enabling the energy transition </span>
                by accelerated deployment of renewables into the
                energy mix.</p>
            </div>

          </div>
        </div>

        <div className={styles.blackStripe} id="for-partners">
          <h2>FOR PARTNERS</h2>
        </div>


        <div className={styles.whiteStripe}>
          <div className={styles.product}>

            {/* <div className={styles.col}>
            </div> */}
              <div className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Maecenas tempus varius quam, aliquam vulputate ligula varius sit amet. 
              Maecenas consequat velit vitae sem suscipit porta. 
              Donec gravida sollicitudin dolor, sed posuere tortor pretium sit amet. 
              Suspendisse urna urna, auctor non nulla at, egestas dictum arcu. 
              Sed dignissim mi et nisi molestie sagittis quis ut sapien. 
              Vivamus rhoncus sagittis congue. Duis placerat sapien non lorem volutpat, 
              ut cursus velit interdum. Suspendisse vitae semper elit. 
              Nunc nec sollicitudin sapien, non commodo dui. Integer ullamcorper, 
              ipsum et aliquet semper, erat libero ultrices erat, 
              ac finibus mauris mi a massa. Fusce ac ipsum neque. 
              Donec risus ante, dignissim vel enim ut, tincidunt semper erat. 
              Suspendisse molestie fermentum feugiat. Aliquam accumsan sapien ac dui facilisis congue. 
              Vestibulum sodales velit et ligula tristique, a congue felis sollicitudin. 
              In tempus neque ut congue tristique.
              </div>

            <div className={styles.col}>
              <Image
                src={container}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
                placeholder='blur'
              />
            </div>
          </div>
        </div>


        <div className={styles.blackStripe} id="the-team">
          <h2>
            THE TEAM
          </h2>
        </div>

        <div className={styles.whiteStripe}>
          <div className={styles.product}>
            Timo
            <div className={styles.text}>
              pic
            </div>
          </div>
          <div className={styles.product}>
            Charlotte
            <div className={styles.text}>
              pic
            </div>
          </div>
          <div className={styles.product}>
            Luis
            <div className={styles.text}>
              pic
            </div>
          </div>
        </div>


        <div className={styles.blackStripe}>
          <h2>
            LET&apos;S SHAPE THE <span className={styles.red}>ENERGY TRANSITION</span>!
          </h2>
        </div>

        <div className={styles.whiteStripe}>
          <div className={styles.product}>
            <div className={styles.text}>
              <h2>
                <span className={styles.red}>SIGN UP</span> FOR AN API ACCESS:
              </h2>

              <form name="contact" method="post" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <input placeholder="you@somewhere.com" type="email" name="email"></input>
                &nbsp;
                <button type="submit">SIGN UP</button>
                <small>
                  <p>
                    pre-qualified asset <br />
                    ready to trade aFRR or FCR<br />
                    standalone or pooled
                  </p>
                </small>
              </form>
              <p>&nbsp;</p>
              <hr />
              <p>&nbsp;</p>
              <p>We are open for
                <span className={styles.red}> partnerships </span>
                to turn your assets from
                <span className={styles.red}> static</span> to
                <span className={styles.red}> flexible</span>.
              </p>
              <p>Connect with us: <Link href="mailto:info@peakpower.io"><a>info@peakpower.io</a></Link></p>
            </div>
            <div className={styles.col}>
              <Image
                src={flex}
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
