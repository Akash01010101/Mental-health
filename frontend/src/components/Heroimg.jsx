import React, { useEffect, useState } from 'react';  
import img1 from '../assets/img1.jpeg';  
import img2 from '../assets/img2.jpeg';  
import img3 from '../assets/img3.jpeg';  
import './Hero.css'
function Heroimg() {  
    const images = [img1, img2, img3];  
    const [currentIndex, setCurrentIndex] = useState(0);  
    const [fade, setFade] = useState(false);  

    useEffect(() => {  
        const interval = setInterval(() => {  
            setFade(true); 
            setTimeout(() => {  
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  
                setFade(false); 
            }, 2000); 
        }, 5000);  

        return () => clearInterval(interval);  
    }, [images.length]);  

    return (  
        <img  
            id='h-img'  
            src={images[currentIndex]}  
            alt="Slideshow"  
            className={fade ? 'fade-out' : 'fade-in'}  
        />  
    );  
}  

export default Heroimg;
