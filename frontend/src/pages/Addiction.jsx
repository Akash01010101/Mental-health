import React from 'react';
import './Addiction.css'
import gsap from'gsap'
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
const Addiction = () => {
  const nav = useNavigate();
  useGSAP(()=>{
    gsap.from('.sec',{opacity:0,y:-100,ease:'power.in',duration:0.5})
  },[])
  return (
    <div className="addictions-page">
      <Navbar/>
      <div className="section-up sec">
        <div className="title">
          <h1>Addictions: Understanding, Support, and Recovery</h1>
        </div>
        <div className="intro">
          <p>
            Addiction is a complex condition, a disease that affects brain function and behavior, leading to an inability
            to stop engaging in a particular behavior or substance despite harmful consequences. Addiction can affect anyone, and it’s not simply a matter of willpower or weakness. It often arises from a combination of genetic, environmental, and psychological factors. Recognizing addiction is the first step to seeking help and finding a path toward recovery.
          </p>
        </div>
        <div className='but'><button className='books-but' onClick={()=>{nav('/')}}>Home</button></div>
      </div>

      <div className="section-types sec">
        <div className="subtitle-m">
          <h2>Types of Addiction</h2>
        </div>
        <div className="addiction-types">
          <div className="type">
            <h3>Substance Addiction</h3>
            <p>
              This includes dependency on substances like alcohol, drugs (both prescription and illegal), nicotine, and even caffeine.
            </p>
          </div>
          <div className="type">
            <h3>Behavioral Addiction</h3>
            <p>
              These involve compulsive behaviors such as gambling, shopping, internet use, or gaming, which can also lead to a cycle of dependency and negative consequences.
            </p>
          </div>
        </div>
      </div>

      <div className="section-symp sec">
        <div className="subtitle-m">
          <h2>Symptoms of Addiction</h2>
        </div>
        <div className="symptoms">
          <ul>
            <li>Craving or intense urges to use the substance or engage in the behavior.</li>
            <li>Loss of control over the frequency or amount of use.</li>
            <li>Withdrawal symptoms when the substance or behavior is not accessible.</li>
            <li>Continuing despite understanding the harmful effects on health, relationships, and other life areas.</li>
          </ul>
        </div>
      </div>

      <div className="section-imp an sec">
        <div className="subtitle-m">
          <h2>The Impact of Addiction</h2>
        </div>
        <div className="impact">
          <p>
            Addiction doesn’t just affect the individual; it impacts families, friends, workplaces, and communities.
            The physical health effects can be severe, including organ damage, compromised immune systems, and cognitive impairments. Mental health is also affected, with addiction often co-occurring with depression, anxiety, and other mental health disorders. Socially, addiction can lead to isolation, financial strain, and relationship issues.
          </p>
        </div>
      </div>

      <div className="section-help sec">
        <div className="subtitle-m">
          <h2>Seeking Help and Recovery</h2>
        </div>
        <div className="recovery">
          <p>
            Recovery is possible, and it often begins with asking for help. Support systems, including therapy, community groups, and treatment programs, are essential in managing and overcoming addiction. Approaches can include:
          </p>
          <div className="approaches">
            <div className="approach">
              <h3>Counseling and Therapy</h3>
              <p>
                Behavioral therapies like Cognitive Behavioral Therapy (CBT) or Dialectical Behavior Therapy (DBT) help individuals identify triggers and develop healthier coping mechanisms.
              </p>
            </div>
            <div className="approach">
              <h3>Medication</h3>
              <p>
                For some substance addictions, medication-assisted treatment can reduce cravings and manage withdrawal symptoms.
              </p>
            </div>
            <div className="approach">
              <h3>Support Groups</h3>
              <p>
                Groups such as Alcoholics Anonymous (AA) or Narcotics Anonymous (NA) provide peer support and a sense of community.
              </p>
            </div>
            <div className="approach">
              <h3>Holistic Approaches</h3>
              <p>
                Integrative approaches like mindfulness, exercise, nutrition, and stress management complement traditional treatments.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-res sec">
        <div className="subtitle-m">
          <h2>Resources and Support</h2>
        </div>
        <div className="resources">
          <p>
            If you or someone you know is struggling with addiction, there are resources to provide immediate help and long-term support. Remember, recovery is a journey, and every step counts. Explore our resource list and connect with local or online support groups to begin the path to a healthier, addiction-free life.
          </p>
        </div>
      </div>
      <Cards/>
      <Footer/>
    </div>
  );
};

export default Addiction;
