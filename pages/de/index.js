import Home from '../../components/Home.js'

export default function HomeDE() {
  const content = {
    lang: "de",
    description: "A distributed balancing energy system",
    slogan: <span>A DISTRIBUTED<br />ENERGY BALANCING<br />SYSTEM</span>
  }
  return <Home content={content}/>
}
