import Heroimg from "./Heroimg"
import {gsap} from 'gsap'
import { useGSAP } from '@gsap/react'
import './Hero.css'

function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('#hero', { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
      .from('#hero-text p', { opacity: 0, y: 30, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .from('#hero-subtitle', { opacity: 0, y: 20, duration: 0.8, ease: "power2.out" }, "-=0.5")
      .from('.feature-card', { opacity: 0, y: 20, stagger: 0.2, duration: 0.6 }, "-=0.3");
  }, []);

  return (
    <div id='hero'>
      <div id="hero-text">
        <p>A Safe Space to Explore Mental Wellness</p>
      </div>
      <i id="hero-subtitle">Welcome to a place of support, where mental wellness is our priority</i>
      <Heroimg/>
      
      <div className="feature-cards">
        <div className="feature-card">
          <h3>24/7 Support</h3>
          <p>Access to mental health resources anytime, anywhere</p>
        </div>
        <div className="feature-card">
          <h3>Expert Guidance</h3>
          <p>Connect with qualified mental health professionals</p>
        </div>
        <div className="feature-card">
          <h3>Self-Care Tools</h3>
          <p>Discover personalized wellness techniques</p>
        </div>
      </div>
    </div>
  )
}
export default Hero