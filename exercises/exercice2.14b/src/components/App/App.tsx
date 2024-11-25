
import { useState } from 'react';
import './App.css'
import RandomDog from '../RandomDog';

function App () {
  const[refresh, setRefresh] = useState(false);
  
  
  return (
    <>
      <RandomDog refresh={refresh} />
      <RandomDog refresh={refresh} />
      <RandomDog refresh={refresh} />
      <button onClick={() => setRefresh(!refresh)}>Get a new dog</button>

    </>
  )
}

export default App;
