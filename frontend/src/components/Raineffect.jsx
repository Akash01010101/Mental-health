import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Raineffect = () => {
  const rainRef = useRef(null);

  useEffect(() => {
    const numDrops = 150;
    const rainContainer = rainRef.current;

    for (let i = 0; i < numDrops; i++) {
      const drop = document.createElement('div');
      drop.classList.add('raindrop');
      
      // Vary size, position, and delay for realism
      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.height = `${10 + Math.random() * 30}px`;
      drop.style.animationDelay = `${Math.random() * 2}s`;
      drop.style.opacity = `${0.3 + Math.random() * 0.5}`;
      
      rainContainer.appendChild(drop);
    }

    gsap.fromTo(
      '.raindrop',
      { y: -100 }, // Start above the viewport
      {
        y: '100vh', // End at the bottom
        duration: () => 1 + Math.random() * 1, // Random duration for each drop
        ease: 'power2.in',
        repeat: -1,
        stagger: 0.05,
      }
    );
  }, []);

  return <div ref={rainRef} className="rain-container"></div>;
};

export default Raineffect;
