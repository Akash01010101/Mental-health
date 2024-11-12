import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap';
function Navbar() {
  const nav = useNavigate()
  useGSAP(()=>{
    gsap.to('#nav',{opacity:1,delay:1})
    gsap.to('#nav-bot',{opacity:1,delay:1})
  },[])
  return (
    <>
    <div id='nav'>
        <h1>UpLift.org</h1>
        <button>Get started</button>
    </div>
    <div id="nav-bot">
      <button id="books" onClick={()=>{nav('/Books')}}>Books</button>
      <button id="mental-health">Mental health</button>
      <button>Addiction</button>
    </div>
    </>
  )
}

export default Navbar