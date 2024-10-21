import React from 'react';
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import User from '../User';

function App() {
  

  return (
    <>
      <User name="John Doe" age={25} online={true} />
      <User name="Jane Doe" age={22} online={false} />
      <User name="John Smith" age={30} online={true} />
   
    </>
  )
}

export default App
