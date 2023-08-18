import { useEffect } from 'react';
import Header from './components/Header.js'

function App() {
    useEffect(() => {
      document.title = 'MyPortfolio'
    })
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
