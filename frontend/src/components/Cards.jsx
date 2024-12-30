import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import gsap from'gsap'
function Cards() {
  useGSAP(()=>{
    gsap.from('#cards',{opacity:0,y:50,duration:0.4,delay:0.4})
  },[])
  const nav = useNavigate();
  return (
    <div id="quick">
      <h3>Quick links</h3>
      <div id='cards'>
      <div className="card" onClick={()=>{nav('/Books'); window.scrollTo({top:0})}}>
        <b>Books</b><p>Explore a curated collection of books that offer valuable insights and practical advice on mental health, personal growth, and recovery.</p>
      </div>
      <div className="card" onClick={()=>{nav('/chats')}}><b>Chats</b><p>The chat page of our mental health resources website offers a safe and supportive space for individuals seeking guidance and companionship.</p></div>
      <div className="card" onClick={()=>{nav('/Mentalhealth'); window.scrollTo({top:0})}}><b> Mental Health</b><p>This section provides essential resources and information to help you understand mental health challenges, from common conditions like anxiety and depression to coping strategies and treatment options.</p></div>
      <div className="card" onClick={()=>{nav('/Addiction'); window.scrollTo({top:0})}}><b>Addiction</b><p>Find support and information for overcoming addiction in all its forms. From resources on understanding substance use disorders to practical recovery tools, this section offers guidance for those affected by addiction and their loved ones.</p></div>
      <div className="card" onClick={()=>{nav('/meditations'); window.scrollTo({top:0})}}><b>Meditations</b><p>The Meditations section of our mental health resources site offers a curated collection of guided meditations designed to promote relaxation, mindfulness, and emotional well-being. Each session caters to different needs—whether you're seeking stress relief, improved focus, or a deeper connection with yourself</p></div>
      <div className="card" onClick={()=>{nav('/Hopecore')}}><b>Hopecore</b><p>Explore a vast, uplifting collection of hopecore images designed to inspire positivity and resilience. Each scroll reveals vibrant visuals that celebrate lifes beauty and potential.</p></div>
    </div>
    </div>
  )
}

export default Cards