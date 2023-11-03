import Home from '../../components/Home.js'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'

import container from '../../public/imgs/peakpower_onsite_l.png'

import solution1 from '../../public/imgs/info/1de.png'
import solution2 from '../../public/imgs/info/2de.png'
import solution3 from '../../public/imgs/info/3de.png'

import solutionb1 from '../../public/imgs/info/b1en.png'
import solutionb2 from '../../public/imgs/info/b2en.png'
import solutionb3 from '../../public/imgs/info/b3en.png'
import solutionb4 from '../../public/imgs/info/b4en.png'

import solutionc1 from '../../public/imgs/info/c1de.png'

import timo from '../../public/imgs/team/timo.png'
import charlotte from '../../public/imgs/team/charlotte.png'
import luis from '../../public/imgs/team/luis.png'

import faq from '../../components/faq_de.js'
import Link from 'next/dist/client/link.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/fontawesome-free-brands'


export default function HomeDE() {
    const content = {
        lang: "de",
        description: "Maximising storage investment returns at scale",
        slogan: <span>MAXIMISING STORAGE<br />INVESTMENT RETURNS<br />AT SCALE</span>,
        about: {
            title: "Über Peak Power",
            header: "Maximising storage investment returns. At grid scale.",
            image: container,
            description: <div>
                <hr className={styles.red} />
                <p>
                    Die Welt befindet sich im Wandel von fossilen Brennstoffen hin zu erneuerbarer Energieerzeugung, wie Solarstrom und Wind, die auf eine weniger planbare Weise Strom produzieren.
                    <br /><br />
                    Energiespeicher sind ein integraler Bestandteil des Energiesystems der Zukunft, um die Kontinuität der Stromproduktion zu gewährleisten und Energie durch das Zwischenspeichern gleichmäßig über den Tag zur Verfügung zu stellen.
                    <br /><br />
                    Peak Power betreibt Ihren Batteriespeicher in einem intelligenten Pool, optimiert den Betrieb und hilft dabei, die individuelle Investitionsrendite maßgeblich zu steigern, durch:
                    <br /><br />
                    <ul>
                        <li>
                            Marktübergreifenden Handel der Speicherkapazität (EPEX day-ahead, intra-day, FCR, aFRR)
                        </li>
                        <li>
                            Unsere KI-basierte Software, die den optimalen Fahrplan für den Einsatz des Speichers erstellt und kontinuierlich optimiert
                        </li>
                        <li>
                            Unser Ökosystem, das sicherstellt Speicher sicher und effizient zum Einsatz zu bringen
                        </li>
                    </ul>
                    <br /><br />
                    Und das vollautomatisiert. Aus einer Hand.
                </p>
            </div>,
        },
        solution: {
            title: "Lösung",
            image: container,
            sections: [
                {
                    title: "Was wir tun und warum",
                    content: <div>
                        <p>
                            Aufgrund des notwendigen Ausbaus erneuerbarer Energiequellen werden Energiespeicherkapazitäten benötigt. Heutzutage wird die Kapazität der Speicherressourcen nicht vollständig genutzt, was zu geringeren ROIs von Speicherinvestitionen führt.
                        </p>
                        <div className={`${styles.solutionImg} ${styles.solutionImgIn}`}>
                            <Image
                                src={solution1}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <br /><br />
                        <div className={`${styles.solutionImg} ${styles.solutionImgIn}`}>
                            <Image
                                src={solution2}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <p>
                            Peak Powers Software optimiert die Einnahmen aus Energiespeicheranlagen, indem sie ihre Kapazität zum richtigen Zeitpunkt am richtigen Markt handelt und gleichzeitig die Lebensdauer der Anlage schützt.
                        </p>
                        <div className={`${styles.solutionImg}`}>
                            <Image
                                src={solution3}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <p>
                            Peak Power ist der Integrator zwischen Markt- und Assetmanagement.
                        </p>
                    </div>,
                }, {
                    title: "Customer Use Cases",
                    content: <div style={{ diplay: "flex" }}>
                        <strong>Verbinden Sie Ihr Asset mit unserer Lösung:</strong>
                        <br /><br />
                        <div className={styles.gridcol}>
                            <div className={styles.gridtext}>
                                <h4>
                                    C.1. Investition in Netzdienlichen Batteriespeicher
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
                                Energiemärkte sind etablierte Märkte, auf denen Anleger gute Renditen erzielen und ihre Portfolios diversifizieren können.
                                <br /><br />
                                Peak Power handelt Ihre Batteriekapazität am richtigen Markt, zum besten Preis und zum richtigen Zeitpunkt. Vollautomatisiert.
                                <br /><br />
                                Sind Sie einer unserer Kunden im Bereich von Infrastrukturinvestitionen, der Telekommunikation oder sind generell interessiert an einer spannenden Investition?
                                <br /><br />
                                <a
                                    target="_blank"
                                    href="https://mzcjvj63xkj.typeform.com/to/EYpzpNPM"
                                    rel="noreferrer"
                                >
                                    Berechnen Sie Ihre Rendite
                                </a>
                            </div>
                            <div className={styles.gridtext}>
                                <h4>
                                    C.2. Lastverschiebung
                                </h4>
                                <br /><br />
                                <div style={{ position: "relative", height: "200px", width: "100%" }}>
                                    <Image
                                        src={solutionb2}
                                        layout='fill'
                                        objectFit='contain'
                                        objectPosition={"top center"}
                                    />
                                </div>
                                <br /><br />
                                Solaranlagen produzieren Strom verstärkt um die Mittagsstunden, die Produktion von Windstrom fluktuiert über den Tag hinweg. Die hohe Einspeisung ins Netz in den Mittagsstunden bspw. führt zu niedrigen und teils sogar negativen Preisen.
                                <br /><br />
                                Das Zwischenspeichern von Energie mithilfe eines Batteriesystems zu Zeiten niedriger Preise hingegen und die verzögerte Einspeisung in das Netz Abends und in den Morgenstunden zu höheren Preisen führt zu gesteigerten Erträgen aus Ihrer Anlage.
                                <br /><br />
                                Sind Sie einer unserer landwirtschaftlichen Kunden mit Biogasanlagen und/oder betreiben Sie eine Photovoltaik- oder Windkraftanlage?
                                <br /><br />
                                <a
                                    target="_blank"
                                    href="https://mzcjvj63xkj.typeform.com/to/EYpzpNPM"
                                    rel="noreferrer"
                                >
                                    Berechnen Sie Ihre Rendite
                                </a>
                            </div>
                            <div className={styles.gridtext}>
                                <h4>
                                    C.3. Optimierung Ihres Energiemixes
                                </h4>
                                <br /><br />
                                <div style={{ position: "relative", height: "200px", width: "100%" }}>
                                    <Image
                                        src={solutionb3}
                                        layout='fill'
                                        objectFit='contain'
                                        objectPosition={"top center"}
                                    />
                                </div>
                                <br /><br />
                                Aufgrund steigender Strompreise setzen viele Unternehmen auf eine Mischung aus erneuerbarer Energieerzeugung und -speicherung, um die Gesamtenergiekosten zu senken.
                                <br /><br />
                                Lassen Sie uns einen Blick auf die Ausnutzung Ihrer Batterie werfen und Vorschläge unterbreiten, wie wir den Betrieb der Batterie optimieren können.
                                <br /><br />
                                Sind Sie einer unserer Kunden im Bereich Datencenter, produzierendem Gewerbe oder in der Energieerzeugung?
                                <br /><br />
                                <a
                                    target="_blank"
                                    href="https://mzcjvj63xkj.typeform.com/to/EYpzpNPM"
                                    rel="noreferrer"
                                >
                                    Berechnen Sie Ihre Rendite
                                </a>
                            </div>
                            <div className={styles.gridtext}>
                                <h4>
                                    C.4. VNBs und Stadtwerke
                                </h4>
                                <br /><br />
                                <div style={{ position: "relative", height: "200px", width: "100%" }}>
                                    <Image
                                        src={solutionb4}
                                        layout='fill'
                                        objectFit='contain'
                                        objectPosition={"top center"}
                                    />
                                </div>
                                <br /><br />
                                Als Vorreiter der Energiewende arbeiten Verteilnetzbetreiber (VNB) und Stadtwerke mit Speicherkapazitätsanbietern zusammen, um Lasten effektiv zu verwalten und Innovation voranzutreiben. Peak Power optimiert die Handelsstrategie von Speichersystemen und unterstützt damit höhere Investitionsrenditen (ROI). Die Folge sind profitablere Investitionen in das Netz und Infrastruktur sowie die Unterstützung erneuerbarer Energieerzeugung.
                                <br /><br />
                                <a
                                    target="_blank"
                                    href="https://mzcjvj63xkj.typeform.com/to/EYpzpNPM"
                                    rel="noreferrer"
                                >
                                    Neugierig wie wir helfen können?
                                </a>
                            </div>
                        </div>
                    </div>,
                }, {
                    title: "Rendite Berechnen",
                    content: <div>
                        Sie sind sich nicht sicher, was wir für Sie tun können?
                        <a
                            target="_blank"
                            href="https://mzcjvj63xkj.typeform.com/to/EYpzpNPM"
                            rel="noreferrer"
                        > Nehmen Sie an unserem Quiz teil </a>
                        und wir verraten Ihnen, wie wir Ihr Business Case durch optimierten Betrieb und Handel profitabler machen können.
                        Unsure what we can do for you?
                        <br />
                    </div>,
                },
            ]
        },
        partners: {
            title: "Partner",
            header: "Talent wins games, but teamwork and intelligence win championships.",
            subheader: "",
            description: <div>
                <hr className={styles.red} />
                <small>
                    **Michael Jordan**
                </small>
                <br /><br />
                Möchten Sie Teil des Peak Power Ökosystems werden? Werden Sie unser Partner.
                <br />
                <div style={{ position: "relative", height: "400px", width: "100%" }}>
                    <Image
                        src={solutionc1}
                        layout='fill'
                        objectFit='contain'
                        objectPosition={"top center"}
                    />
                </div>
                <br />
                Wir kreieren ein Ökosystem, das eine optimale Abstimmung zwischen der Optimierung von Energiehandelsaktivitäten und dem Betrieb von Anlagen gewährleistet. Wir arbeiten dabei mit führenden Unternehmen der Branche wie Batterielieferanten, Finanzierungsunternehmen und VPP-Anbietern zusammen. Möchten Sie einer von ihnen werden?
                <br /><br />
                <Link href="#contact">Nehmen Sie Kontakt mit uns auf</Link>
            </div>
        },
        team: {
            title: "Team",
            sections: [
                {
                    title: "Timo Juritsch", image: timo,
                    content: <div>
                        <small>
                            <a target='_blank' rel="noreferrer"
                                href='https://www.linkedin.com/in/timojuritsch/'>
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    width="20px"
                                />
                            </a>
                        </small>
                        Co-Founder | CEO
                        <br /><br />
                        Industrial Engineer | Energy
                        11+ YRS SCM & Operations
                        7+ YRS Leading X-functional Teams
                    </div>
                },
                {
                    title: "Luis del Río Francos", image: luis,
                    content: <div>
                        <small>
                            <a target='_blank' rel="noreferrer"
                                href='https://www.linkedin.com/in/luis-del-rio-francos/'>
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    width="20px"
                                />
                            </a>
                        </small>
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
            title: "FAQ",
            collapsible: true,
            sections: faq.faq,
        },
        contact: {
            title: "Contact",
        }
    }
    return <Home content={content} />
}
