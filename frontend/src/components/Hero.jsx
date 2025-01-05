import Heroimg from "./Heroimg"
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
function Hero() {
  useGSAP(()=>{
    gsap.from('#hero',{opacity:0,x:-60,delay:0,duration:0.4})
  },[])
  return (
    <div id='hero'>
        <div id="hero-text"><p>A Safe Space to Explore Mental Wellness</p></div>
        <i>Welcome to a place of support, where mental wellness is our priority</i>
        <Heroimg/>
    </div>
  )
}
export default Hero