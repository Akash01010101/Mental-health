import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import './Meditations.css'; 
import {useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
const Meditations = () => {  
    useGSAP(()=>{
        gsap.fromTo('.meditations-header',{opacity:0,x:-100},{opacity:1,x:0,ease:'power1.in',duration:0.5})
        gsap.fromTo('.an',{opacity:0,x:100},{opacity:1,x:0,ease:'power1.in',duration:0.5})
    },[])
    const nav = useNavigate();
    return (  
        <div className="meditations-container">
            <Navbar/>  
           <div className="med-c">
           <header className="meditations-header">  
                <h1>Mindfulness and Meditation</h1>  
                <p>Find peace, clarity, and resilience through meditation.</p>  
                <button className='books-but' onClick={()=>{nav('/')}}>Home</button>
            </header>  
            <div className="an">
            <section className="meditation-benefits">  
                <h2>Benefits of Meditation</h2>  
                <ul>  
                    <li><strong>Reduces Stress:</strong> Regular meditation can significantly lower stress levels by promoting relaxation and reducing the overproduction of stress hormones.</li>  
                    <li><strong>Enhances Focus:</strong> Mindfulness practices help improve attention span and concentrate more effectively both in personal and professional life.</li>  
                    <li><strong>Promotes Emotional Health:</strong> Meditation can create a more positive outlook on life and improve self-awareness, allowing for better emotional regulation.</li>  
                    <li><strong>Improves Sleep:</strong> By calming the mind, meditation can aid in falling asleep and improving the quality of sleep.</li>  
                    <li><strong>Increases Self-Awareness:</strong> Regular practice can cultivate a deeper understanding of oneself, which is vital for personal growth and mental well-being.</li>  
                </ul>  
            </section>  

            <section className="types-of-meditation">  
                <h2>Types of Meditation</h2>  
                <p>Explore various meditation techniques to find what resonates best with you:</p>  
                <ul>  
                    <li><strong>Mindfulness Meditation:</strong> Focuses on being intensely aware of what you're sensing and feeling in the moment, without interpretation or judgment.</li>  
                    <li><strong>Guided Meditation:</strong> Involves a guide or a recording that leads you through the practice, often incorporating visualizations and relaxing narratives.</li>  
                    <li><strong>Transcendental Meditation:</strong> A unique form of silent mantra meditation that aims to settle the mind into a state of profound rest.</li>  
                    <li><strong>Loving-Kindness Meditation (Metta):</strong> Focuses on developing an attitude of love and kindness towards oneself and others.</li>  
                    <li><strong>Body Scan:</strong> A technique focused on the different parts of the body, promoting awareness and relaxation.</li>  
                </ul>  
            </section>  

            <section className="practical-tips">  
                <h2>Practical Tips for Beginners</h2>  
                <p>Here are some tips to help you get started with meditation:</p>  
                <ol>  
                    <li><strong>Start Small:</strong> Begin with just a few minutes a day and gradually increase the time as you become more comfortable.</li>  
                    <li><strong>Create a Comfortable Space:</strong> Find a quiet place where you can sit comfortably without distractions.</li>  
                    <li><strong>Be Consistent:</strong> Try to meditate at the same time each day to develop a habit.</li>  
                    <li><strong>Use Apps or Resources:</strong> Consider using meditation apps like Headspace, Calm, or Insight Timer for guided sessions.</li>  
                    <li><strong>Be Patient:</strong> Meditation is a skill that takes practice. Don’t get discouraged if it feels difficult at first.</li>  
                </ol>  
            </section>  

            <section className="resources">  
                <h2>Additional Resources</h2>  
                <p>For further exploration into meditation and mindfulness, consider the following resources:</p>  
                <ul>  
                    <li><a href="https://www.headspace.com/" target="_blank" rel="noopener noreferrer">Headspace</a> - A popular meditation app featuring guided sessions and articles.</li>  
                    <li><a href="https://www.calm.com/" target="_blank" rel="noopener noreferrer">Calm</a> - An app focused on meditation, sleep, and relaxation.</li>  
                    <li><a href="https://insighttimer.com/" target="_blank" rel="noopener noreferrer">Insight Timer</a> - Free guided meditations from a community of teachers.</li>  
                    <li><a href="https://www.meditationoasis.com/" target="_blank" rel="noopener noreferrer">Meditation Oasis</a> - Offers both guided meditations and resources for meditation practices.</li>  
                </ul>  
            </section>  

            <footer className="meditations-footer">  
                <p>Remember, meditation is a personal journey. Embrace the process and allow it to unfold at your own pace.</p>  
            </footer>  
            </div>
           </div>
           <Footer/>
        </div>  
    );  
};  

export default Meditations;