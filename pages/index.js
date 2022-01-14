import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/imgs/logo.png'
import system from '../public/imgs/system.jpg'
import container from '../public/imgs/peakpower_onsite_l.png'
import secondlife from '../public/imgs/ev.jpg'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peak Power</title>
        <meta name="description" content="The distributed balancing system" />
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
            THE DISTRIBUTED<br />BALANCING<br />SYSTEM
          </p>
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.blackStripe}>
          <h2>
          <span className={styles.red}>UNLOCK</span> THE <span className={styles.red}>RENEWABLE ENERGY</span> TRANSITION
          </h2>
        </div>


        <div className={styles.whiteStripe}>
          <div className={styles.product}>

            <div className={styles.col, styles.text}>

              <h2>
                BUILDING A DISTRIBUTED <span className={styles.red}>ENERGY STORAGE </span>SYSTEM
              </h2>
              <p>
                We urgently need to unlock the <span className={styles.red}>energy transition</span> by expanding 
                sustainable sources and maintaining a balanced grid.
              </p>
              <p>
                We are building a <span className={styles.red}>distributed energy storage</span> system that helps balancing the electric grid.
              </p>

              <h2>
                WHY<span className={styles.red}>?</span>
              </h2>

              <p>
                Renewable Energy is an <span className={styles.red}>intermittent source of energy</span> that 
                needs to be balanced to fully replace carbon based energy plants.
              </p>
              <p>
                With the energy transition advancing, it becomes more difficult, 
                more costly and more challenging to maintain a
                <span className={styles.red}> balanced electricity grid</span>.
              </p>


            </div>
            
            <div className={styles.col}>
              <Image 
                  src={container}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='right'
                  placeholder='blur'
              />
            </div>

          </div>
        </div>


        
        <div className={styles.blackStripe}>
          <h2>
          RE-USE <span className={styles.red}>AND </span>REPURPOSE
          </h2>
        </div>

        <div className={styles.whiteStripe}>
          <div className={styles.product}>
            <div className={styles.col}>
            <Image 
                  src={secondlife}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='left'
                  placeholder='blur'
            />
            </div>
            <div className={styles.col, styles.text}>
              <h2>
              SECOND LIFE EV <span className={styles.red}>BATTERIES</span>
              </h2>
              <p>
                Using batteries as <span className={styles.red}>temporary storage</span> helps balancing the grid.
              </p>
              <p>
                Rapid advances on battery technologies make <span className={styles.red}>old Electric Vehicle 
                batteries</span> obsolete before their end of life. We give these batteries 
                a <span className={styles.red}>second purpose</span> by contributing to balancing the grid.
              </p>
            </div>
          </div>
        </div>
        
        <div className={styles.blackStripe}>
          <h2>
            OUR DISTRIBUTED <span className={styles.red}>ENERGY STORAGE </span>SYSTEM
          </h2>
        </div>

        <div className={styles.whiteStripe}>
          <div className={styles.product}>
          <div className={styles.col, styles.text}>
            <p>
            With our software solution we control and 
            steer a <span className={styles.red}>smart network </span> 
            of distributed storage assets. 
            They automatically react to <span className={styles.red}>grid unbalances</span>, 
            store <span className={styles.red}>excess energy</span> from 
            renewable energy sources 
            and feed energy back into the grid when most needed. This helps the energy transition and 
            optimises asset economics.
            </p>
          </div>
          <div className={styles.col}>
            <Image 
                  src={system}
                  layout='fill'
                  objectFit='contain'
                  objectPosition='right'
                  placeholder='blur'
            />
            </div>
          </div>
        </div>

        <div className={styles.blackStripe, styles.footer}>
          Questions? Write us: &nbsp;<a href="mailto:info@peakpower.io">info@peakpower.io</a>
        </div>

      </main>

    </div>
  )
}
