import React, { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Technologies from './components/Technologies.jsx'
import DarkModeTransition from './components/DarkModeTransition.jsx'
import TailwindLogo from './assets/tailwind.png'
import Projects from './components/Projects.jsx'
import styles from './components/Projects.module.css'

function App() {

  

 
  function typeText(elementClass, text) {
    var elements = document.querySelectorAll(elementClass);

    function type() {
      elements.forEach(element => {
        var index = 0;
        var originalText = element.textContent;
        
        function typeCharacter() {
          if (index < text.length) {
            element.textContent = originalText + text.substring(0, index + 1);
            index++;
          } else {
            clearInterval(interval);
          }
        }
        
        var interval = setInterval(typeCharacter, 90);
      });
    }

    type();
  }

  const [textProject, setTextProject] = useState("Click on any project to see more info")

  useEffect(() => {

    function handleButtonClick(event){
      console.log("Clicked Button", event.target)
    
      
      const clickedComponent = event.target.className

      if (clickedComponent.includes("projectBox1")){
        console.log("Box1")
        setTextProject("This is a Web Market made in conjunction with other programmers, it explores product search functions, filters, cart, among others.")
      }
      if (clickedComponent.includes("projectBox2")){
        console.log("Box2")
        setTextProject("This is a Digital Stopwatch with start, reset and pause functions.")
      }
      if (clickedComponent.includes("projectBox3")){
        console.log("Box3")
        setTextProject("This is a login page with Dark Theme and Light Theme function, + Digital Clock")
      }
      if (clickedComponent.includes("projectBox4")){
        console.log("Box4")
        setTextProject("This is a digital clock that works based on information provided by the PC.")
      }
    }
  
    document.querySelectorAll(".prBox").forEach((button)=>{
      button.addEventListener('click', handleButtonClick)
    })
    

    typeText(".hi", "Hi, my name is", 90);
  }, []);

  return (
    <div className="App overflow-x-hidden overflow-y-hidden">
      <Header/>
      <DarkModeTransition/>

      <section id='Home' className='flex justify-center items-start ml-24 flex-col w-full h-screen'>
        <h3 className='hi primaryColor text-2xl font-extrabold mb-6'>&gt; </h3>
        <h1 className='textColor2 text-7xl font-extrabold mb-6'>ByakkoLord.</h1>
        <h2 className='textColor1 text-6xl font-extrabold mb-6'>Here i turn imagination into reality</h2>
        <p className='textColor1 w-96 text-xl font-medium mb-6'>I am a Front-End Developer on the rise, here you will find some of my <span className='primaryColor'>habilities</span>, <span className='primaryColor'>projects</span> and ambitions.</p>
        <article id='SocialMedias' className='flex justify-between w-40 ml-6'>
        <i className="fa-solid fa-envelope primaryColor text-4xl hover:cursor-pointer hover:scale-110 transition-all"/>
        <i className="fa-brands fa-linkedin primaryColor text-4xl hover:cursor-pointer hover:scale-110 transition-all"/>
        <i className="fa-brands fa-github primaryColor text-4xl hover:cursor-pointer hover:scale-110 transition-all"/>
        <img src='/assets/download.png' alt=''/>
        </article>
      </section>

      <section id='Tecnologies' className='flex flex-col justify-center items-center overflow-hidden w-full h-screen shadowBox tertiaryColor p-10'>
          <h1 className='text-7xl primaryColor text-center font-extrabold'>Technologies</h1>
          <section className='grid gap-5 grid-cols-3 grid-rows-3 w-96 mt-11'>
            <Technologies name='HTML5' icon='fa-brands fa-html5 tech'/>
            <Technologies name='CSS3' icon='fa-brands fa-css3-alt tech'/>
            <Technologies name='JavaScript' icon='fa-brands fa-square-js tech'/>
            <Technologies name='ReactJs' icon='fa-brands fa-react tech'/>
            <div className="flex toolactive hover:scale-110 transition-all hover:cursor-pointer justify-center items-center w-28 h-28 quaternaryColor shadow-md shadow-black roundedPers1">
              <img src={TailwindLogo} className='w-72' alt='TailwindCSS'/>
              <span className="tooltip items-center pl-4 pr-4 h-11  bg-slate-600 text-white rounded-xl">TailwindCSS</span>
            </div>   
            <Technologies name='Git' icon='fa-brands fa-git-alt tech'/>
            <Technologies name='Java' icon='fa-brands fa-java tech'/>
            <Technologies name='Learning' icon='fa-brands fa-question tech'/>
            <Technologies name='Learning' icon='fa-brands fa-question tech'/>
          </section>
          <section>
            
          </section>
      </section>
      <section id='Projects' className='flex justify-center items-center flex-col overflow-hidden w-full h-screen p-10'>
        <h1 className='text-7xl primaryColor text-center font-extrabold'>Projects</h1>
        <section className='flex'>
          <article id='ArtProjects' className='mt-16 overflow-auto roundedPers1 shadowBox w-96 h-96 quaternaryColor'>
            <div className='flex flex-col items-center roundedPers1 justify-center'>
                <Projects indexProjects={styles.projectBox1} additionalClass={'projectBox1 cursor-pointer prBox mb-10 mt-6'}/>
                <Projects indexProjects={styles.projectBox2} additionalClass={'projectBox2 cursor-pointer prBox mb-10'}/>
                <Projects indexProjects={styles.projectBox3} additionalClass={'projectBox3 cursor-pointer prBox mb-10'}/>
                <Projects indexProjects={styles.projectBox4} additionalClass={'projectBox4 cursor-pointer prBox mb-6'}/>
            </div>
          </article>
            <article className='w-96 h-96 flex mt-16 ml-56 text-center items-center roundedPers1 quaternaryColor shadowBox justify-center'>
              <p className='font-semibold pl-5 pr-5 text-2xl primaryColor'>{textProject}</p>
            </article>
        </section>
      </section>

      <section id='About' className='flex justify-evenly items-center overflow-hidden w-full h-screen shadowBox tertiaryColor p-10'>
        <article className='w-96 h-96 quaternaryColor roundedPers1 shadowBox'>
          <h3 className='primaryColor font-semibold text-4xl text-center mt-12'>Who am i?</h3>
          <p className='text-white font-semibold text-xl text-center mt-8 ml-6 mr-6'>Hello, I'm ByakkoLoad or Guilherme Fonseca, I'm 19 years old, I'm a Front-End programmer, currently familiar with technologies (HTML, CSS and JavaScript) and I try to keep evolving according to the market and its front.</p>
        </article>
        <article className='flex flex-col justify-center items-center w-96 h-96'>
          <ul>
            <li className='borderAbout pl-5 mb-5 text-white'>He completed the technical course in electrotechnics during high school at ETEC.</li>
            <li className='borderAbout pl-5 mb-5 text-white'>Currently studying Bachelor of Science in Computer Science.</li>
            <li className='borderAbout pl-5 mb-5 text-white'>In Progress</li>
            <li className='borderAbout pl-5 mb-5 text-white'>In Progress</li>
          </ul>
        </article>
      </section>
      <Footer/>
    </div>
    
  );
}

export default App;
