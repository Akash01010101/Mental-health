import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Books.css';
import Cards from '../components/Cards';

gsap.registerPlugin(ScrollTrigger);

function Books() {
  const booksRef = useRef(null);
  const headerRef = useRef(null);
  const nav = useNavigate();

  const books = [
    {
      name: 'The Power of Now',
      author: 'Eckhart Tolle',
      desc: 'A guide to living fully in the present moment, Tolles teachings help reduce stress and cultivate inner peace.',
      category: 'Mindfulness'
    },
    {
      name: 'Atomic Habits',
      author: 'James Clear',
      desc: 'This book focuses on forming healthy habits in small, practical steps. Its a fantastic resource for building routines that support mental well-being.',
      category: 'Self-Development'
    },
    {
      name: 'An Unquiet Mind',
      author: 'Kay Redfield Jamison',
      desc: 'A deeply personal memoir from a clinical psychologist who lives with bipolar disorder, offering insights into the challenges and triumphs of managing mental illness.',
      category: 'Memoir'
    },
    {
      name: 'The Body Keeps the Score',
      author: 'Bessel van der Kolk',
      desc: 'A comprehensive exploration of trauma and how it affects the mind and body, offering methods for healing.',
      category: 'Psychology'
    },
    {
      name: 'Maybe You Should Talk to Someone',
      author: 'Lori Gottlieb',
      desc: 'A therapist explores the inner chambers of her patients lives while examining her own life experiences.',
      category: 'Psychology'
    },
    {
      name: 'Lost Connections',
      author: 'Johann Hari',
      desc: 'An investigation into the real causes of depression and anxiety, offering unexpected solutions.',
      category: 'Mental Health'
    },
    {
      name: 'Quiet',
      author: 'Susan Cain',
      desc: 'Explores the power of introverts in a world that cant stop talking, helping readers understand and embrace their nature.',
      category: 'Psychology'
    },
    {
      name: 'The Happiness of Pursuit',
      author: 'Chris Guillebeau',
      desc: 'Discovering the quest that will bring purpose to your life, focusing on personal fulfillment and mental well-being.',
      category: 'Self-Development'
    },
    {
      name: 'Feeling Good',
      author: 'David D. Burns',
      desc: 'A groundbreaking book on cognitive behavioral therapy that provides practical exercises to overcome depression and boost mood.',
      category: 'Self-Help'
    },
    {
      name: 'The Anxiety and Phobia Workbook',
      author: 'Edmund J. Bourne',
      desc: 'A comprehensive guide for managing anxiety, panic, and fear with proven strategies and exercises.',
      category: 'Self-Help'
    },
    {
      name: 'The Mindful Way Through Depression',
      author: 'Mark Williams',
      desc: 'Explores mindfulness-based cognitive therapy as a powerful approach to preventing depression relapse.',
      category: 'Mindfulness'
    },
    {
      name: 'The Highly Sensitive Person',
      author: 'Elaine N. Aron',
      desc: 'A guide for those who feel overwhelmed by stimuli, helping them understand and thrive with their sensitivity.',
      category: 'Psychology'
    },
    {
      name: 'The Upward Spiral',
      author: 'Alex Korb',
      desc: 'Using neuroscience to reverse the course of depression, one small change at a time.',
      category: 'Neuroscience'
    },
    {
      name: 'The Happiness Trap',
      author: 'Russ Harris',
      desc: 'Introduction to ACT (Acceptance and Commitment Therapy) for breaking free from anxiety and depression.',
      category: 'Psychology'
    },
    {
      name: 'Mans Search for Meaning',
      author: 'Viktor E. Frankl',
      desc: 'A powerful memoir and psychological exploration of finding purpose and meaning in lifes darkest moments.',
      category: 'Psychology'
    },
    {
      name: 'The Dance of Connection',
      author: 'Harriet Lerner',
      desc: 'How to talk to someone when youre mad, hurt, scared, frustrated, insulted, betrayed, or desperate.',
      category: 'Relationships'
    },
    {
      name: 'Rewire Your Anxious Brain',
      author: 'Catherine M. Pittman',
      desc: 'Understanding how your brain makes you anxious and what you can do to change it.',
      category: 'Neuroscience'
    },
    {
      name: 'The Self-Compassion Skill Workbook',
      author: 'Tim Desmond',
      desc: 'A practical guide to cultivating self-compassion and emotional resilience.',
      category: 'Self-Help'
    }
  ];

  useGSAP(() => {
    // Header animation
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: 'power4.out'
    });

    // Books grid animation with stagger
    gsap.from('.book-card', {
      y: 50,
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: '.books-grid',
        start: 'top center+=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    // Hover animations
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: '0 20px 30px rgba(0, 0, 0, 0.2)'
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
        });
      });
    });
  }, []);

  return (
    <div className="books-page">
      <Navbar />
      <div className="books-container">
        <header ref={headerRef} className="books-header">
          <h1>Mental Health Library</h1>
          <p>
            Explore our carefully curated collection of books that illuminate the path to mental well-being.
            Each book offers unique insights, practical strategies, and profound understanding of the human mind.
          </p>
          <button className="home-button" onClick={() => nav('/')}>
            Return Home
          </button>
        </header>

        <div ref={booksRef} className="books-grid">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <div className="book-content">
                <span className="book-category">{book.category}</span>
                <h3 className="book-title">{book.name}</h3>
                <h4 className="book-author">by {book.author}</h4>
                <p className="book-description">{book.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Cards/>
      <Footer />
    </div>
  );
}

export default Books;
