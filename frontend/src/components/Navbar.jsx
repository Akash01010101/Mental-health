import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap';
function Navbar() {
  const nav = useNavigate()
  useGSAP(()=>{
    gsap.to('#nav',{opacity:1,delay:0.2})
    gsap.to('#nav-bot',{opacity:1,delay:0.2})
  },[])
  return (
    <>
    <div id='nav'>
        <h1>UpLift.org</h1>
        <a href="#cards"><button id='get-started'>Get started</button></a>
    </div>
    <div id="nav-bot">
      <button onClick={()=>{nav('/Books')}}>Books</button>
      <button onClick={()=>{nav('/MentalHealth')}}>Mental health</button>
      <button onClick={()=>{nav('/Addiction')}}>Addiction</button>
    </div>
    </>
  )
}

export default Navbar