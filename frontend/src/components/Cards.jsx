import { useGSAP } from '@gsap/react'
import { useNavigate } from 'react-router-dom'
import gsap from'gsap'
function Cards() {
  useGSAP(()=>{
    gsap.fromTo('#cards',{opacity:0,x:-50},{opacity:1,x:0})
  },[])
  const nav = useNavigate();
  return (
    <div id='cards'>
      <div className="card" onClick={()=>{nav('/Books'); window.scrollTo({top:0})}}>
        <b>Books</b><p>Explore a curated collection of books that offer valuable insights and practical advice on mental health, personal growth, and recovery.</p>
      </div>
      <div className="card" onClick={()=>{nav('/chats')}}><b>Chats</b><p>The chat page of our mental health resources website offers a safe and supportive space for individuals seeking guidance and companionship.</p></div>
      <div className="card" onClick={()=>{nav('/Mentalhealth'); window.scrollTo({top:0})}}><b> Mental Health</b><p>This section provides essential resources and information to help you understand mental health challenges, from common conditions like anxiety and depression to coping strategies and treatment options.</p></div>
      <div className="card" onClick={()=>{nav('/Addiction'); window.scrollTo({top:0})}}><b>Addiction</b><p>Find support and information for overcoming addiction in all its forms. From resources on understanding substance use disorders to practical recovery tools, this section offers guidance for those affected by addiction and their loved ones.</p></div>
      <div className="card" onClick={()=>{nav('/meditations'); window.scrollTo({top:0})}}><b>Meditations</b><p>The Meditations section of our mental health resources site offers a curated collection of guided meditations designed to promote relaxation, mindfulness, and emotional well-being. Each session caters to different needs—whether you're seeking stress relief, improved focus, or a deeper connection with yourself</p></div>
      <div className="card" onClick={()=>{nav('/Support')}}><b>Support Groups</b><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ipsa sint fugiat facilis asperiores voluptatum, nulla, voluptatem quia iste maiores repudiandae magnam iure dolorum vel necessitatibus sunt debitis dolore quo labore officiis suscipit nisi quos impedit error? Minus officiis sunt libero, fugit, et asperiores, eaque vel distinctio aspernatur sint harum?</p></div>
      
    </div>
  )
}

export default Cards