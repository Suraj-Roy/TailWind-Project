import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';

function App() {
  const [count, setCount] = useState(0);

  return (
   <>
   <Navbar/>
   <Home/>
   <Features/>
   </>
  );
}

export default App;
