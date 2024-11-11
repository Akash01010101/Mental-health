import React, { useEffect } from 'react'
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpeg'
import img3 from '../assets/img3.jpeg'
import { useState } from 'react'
function Heroimg() {
    const images = [
        img1,
        img2,
        img3
    ]
    const [currentindex, setcurrentindex] = useState(0)
    useEffect(()=>{
        const interval = setInterval(() => {
            setcurrentindex((prevIndex) => (prevIndex + 1) % images.length);
          }, 5000);
          return ()=> clearInterval(interval)
        })
  return (
         <img id='h-img'
        src={images[currentindex]}
        alt="Slideshow"
        style={{
            transition: 'opacity 1s ease-in-out',
          }}
        />
  )
}

export default Heroimg