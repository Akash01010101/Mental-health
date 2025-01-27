import React, { useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
function Cont() {
  useGSAP(()=>{
    gsap.from('#content',{opacity:0,y:60,delay:0.4,x:60})
  },[])

  return (
    <div id='content'>
        <h4 >Why You Should Seek Help</h4>
        <p>Mental health struggles are common, and seeking help is a vital step towards healing and growth. Professional support can offer valuable tools, strategies, and a safe space to express yourself, helping you better understand your emotions and navigate challenges. Remember, you dont have to face mental health challenges alone—reaching out for support is a sign of strength, not weakness, and it can significantly improve your well-being.</p>
    </div>
  )
}

export default Cont