import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Raineffect = () => {
  const rainRef = useRef(null);
  useEffect(() => {
    if (window.innerWidth>800){
      const numDrops = 100;
    const rainContainer = rainRef.current;
    for (let i = 0; i < numDrops; i++) {
      const drop = document.createElement("div");
      drop.classList.add("raindrop");

      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.height = `${10 + Math.random() * 35}px`;
      drop.style.animationDelay = `${Math.random() * 1}s`;
      drop.style.opacity = `${0.3 + Math.random() * 0.5}`;

      rainContainer.appendChild(drop);
    }} else{
      const numDrops = 20;
      const rainContainer = rainRef.current;
      for (let i = 0; i < numDrops; i++) {
        const drop = document.createElement("div");
        drop.classList.add("raindrop");
  
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.height = `${10 + Math.random() * 20}px`;
        drop.style.animationDelay = `${Math.random() * 1}s`;
        drop.style.opacity = `${0.3 + Math.random() * 0.5}`;
  
        rainContainer.appendChild(drop);
    }
    }

    gsap.fromTo(
      ".raindrop",
      { y: -100 },
      {
        y: "100vh",
        duration: () => 1 + Math.random() * 1,
        ease: "power2.in",
        repeat: -1,
        stagger: 0.05,
      }
    );
  }, []);

  return <div ref={rainRef} className="rain-container"></div>;
};

export default Raineffect;
