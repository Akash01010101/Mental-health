import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap';
function Navbar() {
  const nav = useNavigate()
  useGSAP(()=>{
    gsap.to('#nav',{opacity:1,delay:0.5})
    gsap.to('#nav-bot',{opacity:1,delay:0.5})
  },[])
  return (
    <>
    <div id='nav'>
        <h1>UpLift.org</h1>
        <button id='get-started'>Get started</button>
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