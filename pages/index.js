import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/imgs/logo.png'
import storage from '../public/imgs/storage.png'
import secondlife from '../public/imgs/secondlife3.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peak Power</title>
        <meta name="description" content="The distributed energy balancer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.fix}>
        <div className={styles.logo}>
          <Image 
                src={logo}
          />
          <p className={styles.description}>
            THE DISTRIBUTED<br />ENERGY<br />BALANCER
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
              <p>
                For grid providers it is costly and challenging to maintain a <span className={styles.red}>balanced grid</span>. 
                especially with the energy transition advancing.
              </p>
              <p>
                Renewable Energy is an <span className={styles.red}>intermitent</span> source of energy 
                that needs to be <span className={styles.red}>stored</span> to be able to fully replace carbon based 
                energy plants 
              </p>
            </div>

            <div className={styles.col}>
            <Image 
                  src={storage}
            />
            </div>
          </div>
        </div>

        
        <div className={styles.blackStripe}>
          <h2>
          RE-USE AND <span className={styles.red}>REPURPOSE</span>
          </h2>
        </div>

        <div className={styles.whiteStripe}>
          <div className={styles.product}>
            <div className={styles.col}>
            <Image 
                  src={secondlife}
            />
            </div>
            <div className={styles.col, styles.text}>
              <p>
                Electric Vehicles (EVs) are <span className={styles.red}> key player on the clean energy transition </span>
                but they also represent a danger for the environment if we
                don&lsquo;t take care of the <span className={styles.red}>waste</span> after their useful life.
              </p>
              <p>
                Rapid <span className={styles.red}>advances on battery technologies</span> make old EV batteries obsolete 
                before they are fully used, we give this batteries a second purpose by
                <span className={styles.red}> contributing to balance </span> 
                the grid charging the batteries when the sun shines and there&lsquo;s no one using 
                that power, then later we can feed that energy back in when needed.
              </p>
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
