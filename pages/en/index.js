import Home from '../../components/Home.js'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

import container from '../../public/imgs/peakpower_onsite_l.png'

import solution1 from '../../public/imgs/info/1en.png'
import solution2 from '../../public/imgs/info/2en.png'
import solution3 from '../../public/imgs/info/3en.png'

import solutionb1 from '../../public/imgs/info/b1en.png'
import solutionb2 from '../../public/imgs/info/b2en.png'
import solutionb3 from '../../public/imgs/info/b3en.png'
import solutionb4 from '../../public/imgs/info/b4en.png'

import solutionc1 from '../../public/imgs/info/c1en.png'

import timo from '../../public/imgs/team/timo.png'
import charlotte from '../../public/imgs/team/charlotte.png'
import luis from '../../public/imgs/team/luis.png'

import faq from './faq.js'


export default function HomeDE() {
  const content = {
    lang: "en",
    description: "A distributed balancing energy system",
    slogan: <span>A DISTRIBUTED<br />ENERGY BALANCING<br />SYSTEM</span>,
    about: {
      header: "Maximising storage investment returns. At grid scale.",
      image: container,
      description: <div>
        <hr className={styles.red} />
        <p>
        The world transitions from conventional energy sources to renewable energy sources, which leads to a more fluctuating energy production. This poses a challenge to our energy system.
        <br /><br />
        Storage capacity is urgently required to balance the grid and match fluctuating supply with varying electricity demand patterns.
        <br /><br />
        Peak Power helps maximise returns of investment (ROI) for electricity storage assets through:
        <br /><br />
        - trading energy assets across all available markets (EPEX day-ahead, intra-day, FCR, aFRR)
        - employing our AI powered optimizer to trade your capacity in the best market at the right time with maximum returns
        - building an ecosystem to efficiently and securely manage your storage asset
        <br /><br />
        Fully automated. As One-Stop-Shop.
        </p>
      </div>,
    },
    solution: {
      image: container,
      sections: [
        {
          title: "What we do and why",
          content: <div>
            <p>
              Because of the necessary build-up of renewable energy sources,
              energy storage capacity is needed.
              Nowadays the capacity of storage assets is not fully used,
              leading to lower ROIs of storage investments.
            </p>
            <div style={{position: "relative", height: "400px"}}>
              <Image
                  src={solution1}
                  layout='fill'
                  objectFit='contain'
              />
            </div>
            <br /><br />
            <div style={{position: "relative", height: "400px"}}>
              <Image
                  src={solution2}
                  layout='fill'
                  objectFit='contain'
              />
            </div>
            <p>
              Peak Power’s software optimises the revenue from an energy storage asset by 
              trading its capacity at the right market at the right time while 
              protecting the asset’s life.
            </p>
            <div style={{position: "relative", height: "400px"}}>
              <Image
                  src={solution3}
                  layout='fill'
                  objectFit='contain'
              />
            </div>
            <p>
              We are the integrator between market and asset management.
            </p>
          </div>,
        }, {
          title: "Customer Use Cases",
          content: <div style={{diplay:"flex"}}>
            <strong>Connect your energy storage asset to our system:</strong>
            <br /><br />
            <div className={styles.gridcol}>
              <div className={styles.gridtext}>
                <h4>
                C.1. Battery Stand-Alone Investment
                </h4>
                <br /><br />
                <div style={{
                  position: "relative", 
                  height: "200px", 
                  width: "100%",
                }}>
                <Image
                    src={solutionb1}
                    layout='fill'
                    objectFit='contain'
                    objectPosition={"top center"}
                />
              </div>
                <br /><br />
                Energy markets are established markets where investors can earn good returns and 
                diversify their portfolios.
                <br /><br />
                Peak Power trades your battery capacity at the right market, at the best price and 
                the right time. Fully automated.
                <br /><br />
                Are you amongst our customers in the field of general infrastructure investments, 
                telecommunication or are you generally interested in an exciting investment opportunity?
              </div>
              <div className={styles.gridtext}>
                <h4>
                C.2. Load Shifting
                </h4>
                <br /><br />
                <div style={{position: "relative", height: "200px", width: "100%"}}>
                <Image
                    src={solutionb2}
                    layout='fill'
                    objectFit='contain'
                    objectPosition={"top center"}
                />
              </div>
                <br /><br />
                Solar systems produce more electricity around noon, while the production 
                of wind power fluctuates throughout the day. The high feed-in into the grid 
                at midday, for example, leads to low and sometimes even negative prices.
                <br /><br />
                On the other hand, the intermediate storage of energy using a battery system 
                at times of low prices and the delayed feeding back into the grid in the evening 
                and in the morning hours at higher prices leads to increased yields from your system.
                <br /><br />
                Are you amongst our potential customers operating PV, Wind or Biogas assets?
              </div>
              <div className={styles.gridtext}>
                <h4>
                C.3. Energy Portfolio Optimisation
                </h4>
                <br /><br />
                <div style={{position: "relative", height: "200px", width: "100%"}}>
                <Image
                    src={solutionb3}
                    layout='fill'
                    objectFit='contain'
                    objectPosition={"top center"}
                />
              </div>
                <br /><br />
                Because of rising electricity prices, many companies employ a mixture 
                of renewable energy production and storage capacity to lower overall energy costs.
                <br /><br />
                Let us look at the idle capacity of your batterie and identify 
                how to optimise its operation.
                <br /><br />
                Are you amongst our potential customers of data centers, production 
                companies or energy producers?
              </div>
              <div className={styles.gridtext}>
                <h4>
                C.4. DSO
                </h4>
                <br /><br />
                <div style={{position: "relative", height: "200px", width: "100%"}}>
                <Image
                    src={solutionb4}
                    layout='fill'
                    objectFit='contain'
                    objectPosition={"top center"}
                />
              </div>
                <br /><br />
                Being at the forefront of the energy transition, distribution system 
                operators (DSO) partner with storage capacity providers to manage loads 
                effectively and drive innovation. Peak Power optimises revenues to increase 
                energy storage asset ROIs. This leads to more profitable investments and helps 
                propel deployment of renewable energy sources.
              </div>
            </div>
          </div>,
        }, {
          title: "Calculate your returns",
          content: <div>
            Unsure what we can do for you? Take our quiz and we will tell you 
            how we can make your business case more profitable through optimised 
            operation and trading. 
            <br />
            typeform
          </div>,
        },
      ]
    },
    partners: {
      header: "Talent wins games, but teamwork and intelligence win championships.",
      subheader: "",
      description: <div>
        <hr className={styles.red} />
        <small>
        **Michael Jordan**
        </small>
        Do you want to be part of this journey? Become our partner.
        <br />
        <div style={{position: "relative", height: "400px", width: "100%"}}>
                <Image
                    src={solutionc1}
                    layout='fill'
                    objectFit='contain'
                    objectPosition={"top center"}
                />
              </div>
        <br />
        We are building an ecosystem with a focus on the optimisation of trading activities and 
        asset operations. We work with leading companies such as battery suppliers, financing companies 
        and VPP suppliers. Do you want to be become one of them?
      </div>
    },
    team: {
      sections: [
        { title: "Timo Juritsch", image: timo, 
          content: <div>
            Co-Founder | CEO
            <br /><br />
            Industrial Engineer | Energy
            11+ YRS SCM & Operations
            7+ YRS Leading X-functional Teams
          </div>
        },
        { title: "Charlotte Wegener", 
          image: charlotte, 
          content: <div>
            VP Operations
            <br /><br />
            International Business | SCM
            6+ YRS O&M Renewables (E.ON | RWE)
            5+ YRS Team lead O&M Systems & Cyber Security
          </div>
        },
        { title: "Luis del Río Francos", image: luis, 
          content: <div>
            Co-Founder | CTO
            <br /><br />
            Back-End Developer | Data Science
            12+ YRS Software Development
            7+ YRS Leading Tech Teams
          </div>
        },
      ]
    },
    faq: {
      collapsible: true,
      sections: faq.faq,
    },
  }
  return <Home content={content} />
}
