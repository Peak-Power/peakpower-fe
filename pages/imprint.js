import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/imgs/logo_d.png'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          
      </Head>
      <main>
        <div className={styles.blackStripe}>
            <div style={{textAlign: 'left', display: 'inline', width: '80px', position: 'relative'}}>
            <Link href="/" passHref><a>
                  <Image
                          src={logo}
                          priority={true}
                          loading='eager'
                          layout='fill'
                          objectFit='contain'
                  />
            </a></Link>
            </div>
        </div>
        <div style={{padding:'20px'}}
        className={styles.whiteStripe}>
          <div>
            <h1>Imprint</h1>
            <p>
              Information pursuant to Sect. 5 German Telemedia Act (TMG)
            </p>

            <p>
              Peak Power UG (haftungsbeschränkt) <br/>
              c/o Antler Innovation GmbH <br/>
              Novalisstraße 11 <br/>
              10115 Berlin
            </p>

            <p>
              Commercial Register: HRB 238576 B <br/>
              Registration Court: Amtsgericht Charlottenburg
            </p>

            <p>
              Represented by: <br/>
              Luis del Rio Francos <br/>
              Timo Juritsch
            </p>

            <p>
              Contact <br/>
              E-mail: <Link href="mailto:info@peakpower.io">info@peakpower.io</Link> 
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
