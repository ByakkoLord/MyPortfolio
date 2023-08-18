import { useEffect } from 'react';
import Header from './components/Header.js'
import Technologies from './components/Technologies.js'

function App() {
    useEffect(() => {
      document.title = 'MyPortfolio'
    })
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
        </article>
      </section>

      <section id='Tecnologies' className='overflow-hidden w-full h-screen shadowBox tertiaryColor p-10'>
          <h1 className='text-7xl primaryColor text-center font-extrabold'>Technologies</h1>
          <section className='grid '>
            <Technologies icon='fa-brands fa-html5 tech'/>
            <Technologies icon='fa-brands fa-css3-alt tech'/>
            <Technologies icon='fa-brands fa-react tech'/>
            <Technologies icon='fa-brands fa-square-js tech'/>
            <Technologies icon='fa-brands fa-square-js tech'/>
            <Technologies icon='fa-brands fa-square-js tech'/>
          </section>
          <section>

          </section>
      </section>
    </div>
    
  );
}

export default App;
