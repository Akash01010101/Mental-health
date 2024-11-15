import { useGSAP } from '@gsap/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from'gsap'
function Cards() {
  useGSAP(()=>{
    gsap.fromTo('#cards',{opacity:0,x:-50},{opacity:1,x:0})
  },[])
  const nav = useNavigate();
  return (
    <div id='cards'>
      <div className="card" onClick={()=>{nav('/Books')}}>
        <b>Books</b><p>Explore a curated collection of books that offer valuable insights and practical advice on mental health, personal growth, and recovery.</p>
      </div>
      <div className="card" onClick={()=>{nav('/Mentalhealth')}}><b> Mental Health</b><p>This section provides essential resources and information to help you understand mental health challenges, from common conditions like anxiety and depression to coping strategies and treatment options.</p></div>
      <div className="card" onClick={()=>{nav('/Addiction')}}><b>Addiction</b><p>Find support and information for overcoming addiction in all its forms. From resources on understanding substance use disorders to practical recovery tools, this section offers guidance for those affected by addiction and their loved ones.</p></div>
      <div className="card" onClick={()=>{nav('/Addiction')}}><b>Meditations</b><p>Find support and information for overcoming addiction in all its forms. From resources on understanding substance use disorders to practical recovery tools, this section offers guidance for those affected by addiction and their loved ones.</p></div>
      <div className="card" onClick={()=>{nav('/Addiction')}}><b>Support Groups</b><p>Find support and information for overcoming addiction in all its forms. From resources on understanding substance use disorders to practical recovery tools, this section offers guidance for those affected by addiction and their loved ones.</p></div>
    </div>
  )
}

export default Cards