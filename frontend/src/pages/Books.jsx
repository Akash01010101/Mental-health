import { useGSAP } from '@gsap/react';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
function Books() {
  useGSAP(()=>{
    gsap.fromTo('#books-head',{opacity:0,y:-100},{opacity:1,y:0,ease:'power3.out'})
    gsap.fromTo('#books-div',{opacity:0,y:100},{opacity:1,y:0,ease:'power4.out'})
  },[])
  const nav = useNavigate();
  let books = [
    {
    name:'"The Power of Now" by Eckhart Tolle',desc:'A guide to living fully in the present moment, Tolle’s teachings help reduce stress and cultivate inner peace.'
  },
  {
    name:'"Atomic Habits" by James Clear',desc:'This book focuses on forming healthy habits in small, practical steps. It’s a fantastic resource for building routines that support mental well-being.'
  },
  {
    name:'"An Unquiet Mind" by Kay Redfield Jamison',desc:'A deeply personal memoir from a clinical psychologist who lives with bipolar disorder, offering insights into the challenges and triumphs of managing mental illness.'
  },
  {
    name:'"The Body Keeps the Score" by Bessel van der Kolk',desc:'A comprehensive exploration of trauma and how it affects the mind and body, offering methods for healing.'
  }
]
  return (
    <>
    <Navbar/>
    <div id='books-head'>
      <h1>Recommended Reads</h1>
      <p>Welcome to our mental health books collection! Here, we’ve curated a list of books to support, educate, and empower you on your mental health journey. Each recommendation has been chosen with care, covering a range of topics from mindfulness and resilience to understanding specific mental health challenges.</p>
      <button className='books-but' onClick={()=>{nav('/')}}>Home</button>
    </div>
      <div id="books-div">
        {books.map((book,index)=>(
          <div key={index} className="book-item">
          <h3>{book.name}</h3>
          <p>{book.desc}</p>
        </div>
        ))}
      

      </div>
      <Footer/>
    </>
  )
}

export default Books