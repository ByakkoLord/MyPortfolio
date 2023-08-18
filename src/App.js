import { useEffect } from 'react';
import Header from './components/Header.js'

function App() {
    useEffect(() => {
      document.title = 'MyPortfolio'
    })
  return (
    <div className="App">
      <Header/>

      <section id='Home' className='w-full h-screen'>
        <h3>Hi, My name is</h3>
        <h1>ByakkoLord</h1>
        <h2>Here u turn imagination into reality</h2>
        <p>I am a Front-End Developer on the rise, here you will find some of my habilities, projects and ambitions.</p>
      </section>
    </div>
  );
}

export default App;
