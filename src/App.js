import Header from './components/Header.js'
import Technologies from './components/Technologies.js'
import TailwindLogo from './assets/tailwind.png'
import ProjectImage1 from './assets/ProjectImages/Web_Market.gif'
import ProjectImage2 from './assets/ProjectImages/DarkandLightTheme.gif'
import ProjectImage3 from './assets/ProjectImages/Digital_Clock.gif'
import ProjectImage4 from './assets/ProjectImages/StopWatch.gif'
import Projects from './components/Projects.js'

function App() {
  
  return (
    <div className="App overflow-x-hidden">
      <Header/>

      <section id='Home' className='flex justify-center items-start ml-24 flex-col w-full h-screen'>
        <h3 className='primaryColor text-2xl font-extrabold mb-6'>Hi, my name is</h3>
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
            <Technologies name='Learning' icon='fa-brands fa-question tech'/>
            <Technologies name='Learning' icon='fa-brands fa-question tech'/>
            <Technologies name='Learning' icon='fa-brands fa-question tech'/>
          </section>
          <section>
            
          </section>
      </section>
      <section id='Projects' className='flex justify-center items-center flex-col overflow-hidden w-full h-screen p-10'>
        <h1 className='text-7xl primaryColor text-center font-extrabold'>Projects</h1>
        <article id='ArtProjects' className=' mt-16 flex flex-col items-center roundedPers1 shadowBox justify-center w-96 h-96 quaternaryColor'>
    
            <Projects/>
          
        </article>
      </section>
    </div>
    
  );
}

export default App;
