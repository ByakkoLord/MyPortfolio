import { useEffect } from 'react';
import Header from './components/Header.js'

function App() {
    useEffect(() => {
      document.title = 'MyPortfolio'
    })
  return (
    <div className="App">
      <Header/>

      <section id='Home' className='flex justify-center items-start ml-24 flex-col w-full h-screen'>
        <h3 className='primaryColor text-2xl font-extrabold'>Hi, my name is</h3>
        <h1 className='text-white text-7xl font-extrabold'>ByakkoLord.</h1>
        <h2 className=''>Here i turn imagination into reality</h2>
        <p>I am a Front-End Developer on the rise, here you will find some of my habilities, projects and ambitions.</p>
      </section>
    </div>
  );
}

export default App;
