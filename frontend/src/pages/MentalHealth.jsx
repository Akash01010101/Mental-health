import React from "react";
import {useGSAP} from '@gsap/react'
import gsap from'gsap'
import Navbar from "../components/Navbar";
import { useNavigate } from 'react-router-dom'
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
const MentalHealth = () => {
  const nav = useNavigate()
  useGSAP(()=>{
    gsap.from('.mental-health-page',{opacity:0,x:-50,duration:1,ease:'power3.out'})
  },[])
  return (
    <div className="mental-health-page">
      <Navbar/>
      <section className="intro">
        <h2>Welcome to Our Mental Health Resources</h2>
        <p>
          Mental health is a vital part of our overall well-being. Taking care of our mental health can help us navigate life's challenges with resilience and clarity. Whether you’re looking for information, support, or inspiration, we’re here to provide resources to help.
        </p>
        <button className="books-but" onClick={()=>{nav('/')}}>Home</button>
      </section>
     <div className="sec">
<div className="nochange">
<section className="what-is-mental-health">
        <h3>What Is Mental Health?</h3>
        <p>
          Mental health includes our emotional, psychological, and social well-being. It affects how we think, feel, and act, influencing our ability to handle stress, build relationships, and make decisions.
        </p>
      </section>
      <section className="mental-health-challenges">
        <h3>Common Mental Health Challenges</h3>
      
        <ul>
          <li><strong>Anxiety Disorders</strong> - Persistent worry or fear that impacts daily life.</li>
          <li><strong>Depression</strong> - A prolonged feeling of sadness or lack of interest.</li>
          <li><strong>Bipolar Disorder</strong> - Episodes of mood swings between highs and lows.</li>
          <li><strong>Post-Traumatic Stress Disorder (PTSD)</strong> - A response to traumatic events.</li>
          <li><strong>Eating Disorders</strong> - Unhealthy relationships with food and body image.</li>
        </ul>
       
      </section>
</div>
      <div className="b-change">
      <section className="signs">
        <h3>Signs of Mental Health Struggles</h3>
        <ul>
          <li>Persistent sadness or low mood</li>
          <li>Withdrawal from activities</li>
          <li>Changes in sleep patterns</li>
          <li>Difficulty managing stress</li>
        </ul>
      </section>
      <section className="self-care">
        <h3>Self-Care and Coping Strategies</h3>
        <ul>
          <li><strong>Practice mindfulness:</strong> Try techniques like deep breathing and meditation.</li>
          <li><strong>Stay connected:</strong> Connect with friends and family for support.</li>
          <li><strong>Exercise regularly:</strong> Physical activity can improve your mood and reduce stress.</li>
          <li><strong>Sleep well:</strong> Maintain a consistent sleep schedule for better mental health.</li>
        </ul>
      </section>
      </div>
     </div>
     <div className="sec-bot">
      <section className="seeking-help">
        <h3>How to Seek Help</h3>
        <p>If you or someone you know needs support, consider the following options:</p>
        <ul>
          <li><strong>Therapy and Counseling:</strong> Options like cognitive-behavioral therapy (CBT) and talk therapy.</li>
          <li><strong>Hotlines and Helplines:</strong> Reach out to mental health helplines for immediate support.</li>
          <li><strong>Local Resources and Support Groups:</strong> Look for organizations that offer group sessions and resources.</li>
        </ul>
      </section>
      
      <section className="resources">
        <h3>Resources and Further Reading</h3>
        <p>
          For more information and support, visit our <a href="/books">Books</a> page and explore trusted resources.
        </p>
      </section>
      <section className="encouragement">
        <h3>Youre Not Alone</h3>
        <p>
          Remember, mental health is a journey, and seeking support is a sign of strength. You’re not alone—resources and help are available.
        </p>
      </section>
      </div>
      <Cards/>
     <Footer/>
    </div>
  );
};

export default MentalHealth;
