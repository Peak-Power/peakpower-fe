import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/imgs/logo.png'
import container from '../public/imgs/container.png'
import balance from '../public/imgs/balance.png'
import storage from '../public/imgs/storage.png'
import secondlife from '../public/imgs/secondlife.png'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Peak Power</title>
        <meta name="description" content="The distributed balanced grid" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.logo}>
        <Image 
              src={logo}
        />
        <p className={styles.description}>
          THE DISTRIBUTED<br />BALANCED<br />GRID
        </p>
        <br className={styles.clear} />
        <input placeholder="email@example.com"></input> <button>Join to our waiting list</button>
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
                Renewable Energy is an <span className={styles.red}>intermitent</span> source of energy 
                that needs to be <span className={styles.red}>stored</span> to be able to replace carbon based 
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
                Electric Vehicles (EVs) are key player on the clean energy transition
                but they also represent a danger for the environment if we
                don&lsquo;t take care of the waste after their useful life.
              </p>
              <p>
                We give <span className={styles.red}>obsolete EVs batteries</span> a second purpose. 
                By assembling them together and
                connecting them to the grid we <span className={styles.red}>contribute to balancing </span> 
                the network by 
                taking energy from the grid when the sun shines and there&lsquo;s no one using 
                that power, then later we can feed that energy back in when needed.
              </p>
            </div>
          </div>
        </div>



        <div className={styles.blackStripe}>
          <h2>
          BECOME ONE OF THE <span className={styles.red}>DISTRIBUTED</span> OWNERS
          </h2>
        </div>

        <div className={styles.whiteStripe}>
          <div className={styles.product}>
            <div className={styles.col}>
            <Image 
                  src={container}
            />
            </div>
            <div className={styles.col}>
              <p>
                To make this transition possible we need you. 
                Our <span className={styles.red}>2MW </span> 
                batteries will be tokenized enabling anyone to take part 
                of the transition.
              </p>
              <p>Get a <span className={styles.red}>5%</span> anual return + Market Based Premium</p>
              <p>Run-time	Up to <span className={styles.red}>8</span> years</p>
              <p>Start from €1.000</p>

              <input placeholder="email@example.com"></input> <button>Join to our waiting list</button>
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
